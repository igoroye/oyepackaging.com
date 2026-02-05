import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
}

const imageUrls = [
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-239.png", name: "group-239.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-247.png", name: "group-247.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-1-1.svg", name: "vector-1-1.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-2.png", name: "vector-2.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-02-2.png", name: "matte-coffee-bag-mockup-02-2.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/hand-zoom-in-1.svg", name: "hand-zoom-in-1.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/cursor-finger-click-1.svg", name: "cursor-finger-click-1.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/customize-computer-1.svg", name: "customize-computer-1.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/european-union.svg", name: "european-union.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mug-hot-alt--2--8.svg", name: "mug-hot-alt.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/shield-check-1.svg", name: "shield-check-1.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-10.svg", name: "vector-10.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-4.png", name: "vector-4.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/picking-box--1--1.svg", name: "picking-box.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-1.png", name: "mask-group-1.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group.png", name: "mask-group.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-398.png", name: "group-398.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-398-1.png", name: "group-398-1.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-01-1.png", name: "matte-coffee-bag-mockup-01-1.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-02-1.png", name: "matte-coffee-bag-mockup-02-1.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-01-2.png", name: "matte-coffee-bag-mockup-01-2.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/frame-279.svg", name: "frame-279.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-280.png", name: "group-280.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-281.png", name: "group-281.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-282.png", name: "group-282.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-6.png", name: "mask-group-6.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/top-opening-zipper.png", name: "top-opening-zipper.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-365.png", name: "group-365.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-3.svg", name: "vector-3.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-7.png", name: "mask-group-7.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-31.svg", name: "vector-31.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/ellipse-81.png", name: "ellipse-81.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-56.svg", name: "vector-56.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-4.png", name: "mask-group-4.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/rectangle-4673.png", name: "rectangle-4673.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-5.png", name: "mask-group-5.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/ellipse-86.svg", name: "ellipse-86.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/rectangle-4668.svg", name: "rectangle-4668.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-2.png", name: "mask-group-2.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-3.png", name: "mask-group-3.png" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/telegram--13--1.svg", name: "telegram.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/facebook-logo-1.svg", name: "facebook-logo.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/instagram--5--1.svg", name: "instagram.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/linkedin-1.svg", name: "linkedin.svg" },
  { url: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/whatsapp-1.svg", name: "whatsapp.svg" },
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
          .upload(`products/${image.name}`, uint8Array, {
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
