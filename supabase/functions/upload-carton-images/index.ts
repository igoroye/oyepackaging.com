import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
}

const imageUrls = [
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-239.png", name: "group-239.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-247.png", name: "group-247.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-1.svg", name: "vector-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-419.png", name: "group-419.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-57.png", name: "vector-57.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/customize-computer-1.svg", name: "customize-computer-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/european-union.svg", name: "european-union.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mug-hot-alt--2--8.svg", name: "mug-hot-alt.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/shield-check-1.svg", name: "shield-check-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-121.svg", name: "vector-121.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-130.svg", name: "vector-130.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-460.png", name: "group-460.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-97--stroke-.svg", name: "vector-97-stroke.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-98--stroke-.svg", name: "vector-98-stroke.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-92--stroke-.svg", name: "vector-92-stroke.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/frame-279.svg", name: "frame-279.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-281.png", name: "group-281.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg", name: "vector-127.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-455.png", name: "group-455.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-454.png", name: "group-454.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-126--stroke--1.svg", name: "vector-126-stroke-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-2.png", name: "mask-group-2.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/rectangle-4837.svg", name: "rectangle-4837.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/----------2-1.png", name: "carton-box-main.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/hand-zoom-in-1.svg", name: "hand-zoom-in-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/cursor-finger-click-1.svg", name: "cursor-finger-click-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector.svg", name: "vector-arrow.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-2.png", name: "vector-2.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/picking-box--1--1.svg", name: "picking-box.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-3.png", name: "mask-group-3.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/star-1-1.svg", name: "star-1-1.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group.png", name: "mask-group.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-1.png", name: "mask-group-1.png" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/telegram--13--1.svg", name: "telegram.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/facebook-logo-1.svg", name: "facebook-logo.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/instagram--5--1.svg", name: "instagram.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/linkedin-1.svg", name: "linkedin.svg" },
  { url: "https://c.animaapp.com/mkve5d5vXaRKB0/img/whatsapp-1.svg", name: "whatsapp.svg" },
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
          .upload(`carton-boxes/${image.name}`, uint8Array, {
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
