import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
}

const imageUrls = [
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/group-239.png", name: "group-239.png" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/mask-group.png", name: "mask-group.png" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/----------1-11.png", name: "element-1-11.png" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/group-247.png", name: "group-247.png" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/telegram--13--1.svg", name: "telegram.svg" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/facebook-logo-1.svg", name: "facebook-logo.svg" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/instagram--5--1.svg", name: "instagram.svg" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/linkedin-1.svg", name: "linkedin.svg" },
  { url: "https://c.animaapp.com/mkvehh2nHV8P1S/img/whatsapp-1.svg", name: "whatsapp.svg" },
]

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    )

    const results = []

    for (const image of imageUrls) {
      try {
        const response = await fetch(image.url)
        if (!response.ok) {
          results.push({
            name: image.name,
            status: "failed",
            error: `HTTP ${response.status}`
          })
          continue
        }

        const blob = await response.blob()
        const arrayBuffer = await blob.arrayBuffer()
        const uint8Array = new Uint8Array(arrayBuffer)

        const contentType = response.headers.get("content-type") || "image/png"

        const { data, error } = await supabase.storage
          .from("images")
          .upload(`contact-us/${image.name}`, uint8Array, {
            contentType,
            upsert: true
          })

        if (error) {
          results.push({
            name: image.name,
            status: "failed",
            error: error.message
          })
        } else {
          results.push({
            name: image.name,
            status: "success",
            path: data.path
          })
        }
      } catch (err) {
        results.push({
          name: image.name,
          status: "failed",
          error: err instanceof Error ? err.message : "Unknown error"
        })
      }
    }

    return new Response(
      JSON.stringify({
        message: "Upload complete",
        total: imageUrls.length,
        results
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    )
  }
})
