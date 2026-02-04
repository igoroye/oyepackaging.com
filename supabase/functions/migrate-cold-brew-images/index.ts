import { createClient } from "npm:@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
}

const imageUrls = [
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-18.svg", name: "vector-18.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/tea-1.svg", name: "tea-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/tea-2.svg", name: "tea-2.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/coffee--1--1.svg", name: "coffee-1-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/shield-check-1.svg", name: "shield-check-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/subscription--1--1.svg", name: "subscription-1-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/european-union.svg", name: "european-union.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mug-hot-alt--2--8.svg", name: "mug-hot-alt-2-8.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/coffee-beans-1.svg", name: "coffee-beans-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-21.svg", name: "vector-21.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/coffee-heart-1.svg", name: "coffee-heart-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector.svg", name: "vector.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/chair-office-1.svg", name: "chair-office-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/house-tree-1.svg", name: "house-tree-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/dorm-room--1--1.svg", name: "dorm-room-1-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/shopping-cart--3--1.svg", name: "shopping-cart-3-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/gift-1.svg", name: "gift-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/gift-1-1.svg", name: "gift-1-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/telegram--13--1.svg", name: "telegram-13-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/facebook-logo-1.svg", name: "facebook-logo-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/instagram--5--1.svg", name: "instagram-5-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/linkedin-1.svg", name: "linkedin-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/whatsapp-1.svg", name: "whatsapp-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/group-239.png", name: "group-239.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group.png", name: "mask-group.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-1.svg", name: "vector-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-4.svg", name: "vector-4.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/picking-box--1--1.svg", name: "picking-box-1-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/1-7503.png", name: "1-7503.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/hand-zoom-in-1.svg", name: "hand-zoom-in-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/cursor-finger-click-1.svg", name: "cursor-finger-click-1.svg" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group-4.png", name: "mask-group-4.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/3-1.png", name: "3-1.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/----------2-2.png", name: "product-box-2-2.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group-3.png", name: "mask-group-3.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group-1.png", name: "mask-group-1.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group-2.png", name: "mask-group-2.png" },
  { url: "https://c.animaapp.com/mkvdupvcUy2tgs/img/group-247.png", name: "group-247.png" },
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
    const errors = []

    for (const image of imageUrls) {
      try {
        const response = await fetch(image.url)

        if (!response.ok) {
          errors.push({ url: image.url, error: `HTTP ${response.status}` })
          continue
        }

        const blob = await response.blob()
        const arrayBuffer = await blob.arrayBuffer()
        const uint8Array = new Uint8Array(arrayBuffer)

        const contentType = response.headers.get("content-type") || "image/svg+xml"
        const path = `cold-brew-bags/${image.name}`

        const { data, error } = await supabase.storage
          .from("images")
          .upload(path, uint8Array, {
            contentType,
            upsert: true,
          })

        if (error) {
          errors.push({ url: image.url, error: error.message })
        } else {
          const { data: publicUrlData } = supabase.storage
            .from("images")
            .getPublicUrl(path)

          results.push({
            originalUrl: image.url,
            newUrl: publicUrlData.publicUrl,
            path: path,
          })
        }
      } catch (error) {
        errors.push({
          url: image.url,
          error: error instanceof Error ? error.message : String(error)
        })
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        uploaded: results.length,
        failed: errors.length,
        results,
        errors,
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
        success: false,
        error: error instanceof Error ? error.message : String(error),
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
