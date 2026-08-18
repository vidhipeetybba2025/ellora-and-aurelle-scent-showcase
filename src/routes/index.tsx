import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const CDN = "https://www.sarkar.store/cdn/shop/files";

const galleryBase = [
  { file: `orion_main_1.png?v=1786629639`, alt: "Sarkar Élora 100ml parfum bottle" },
  { file: `packaging_2.webp?v=1782468831`, alt: "Élora parfum packaging box" },
  { file: `BB_ORION_NEW_1.png?v=1784828173`, alt: "Bhuvan Bam with Sarkar Élora" },
  { file: `formulated_orion_1574ae34-e97d-46dc-9250-f33d23a7ad6a.webp?v=1785563197`, alt: "Élora formulated in France" },
  { file: `Ingredients_Orion_1.png?v=1784541893`, alt: "Élora fragrance ingredients" },
  { file: `2_0c83dd12-ed3d-4d50-a292-0f0871bff96b.webp?v=1785562501`, alt: "Élora bottle detail" },
  { file: `7th.webp?v=1782468881`, alt: "Élora editorial shot" },
  { file: `4_bottle_shot_2.webp?v=1782468881`, alt: "Élora bottle shot" },
  { file: `last_3.webp?v=1782476698`, alt: "Élora campaign image" },
];

const gallery = galleryBase.map((g) => ({
  alt: g.alt,
  src: `${CDN}/${g.file}&width=800`,
  srcSet: `${CDN}/${g.file}&width=480 480w, ${CDN}/${g.file}&width=800 800w, ${CDN}/${g.file}&width=1200 1200w`,
  thumb: `${CDN}/${g.file}&width=160`,
  full: `${CDN}/${g.file}&width=1400`,
}));


const notes = [
  { img: `${CDN}/top_notes_orion.webp?v=1782469278&width=600`, label: "Top Notes", value: "Lavender, Lemon" },
  { img: `${CDN}/middle_notes_orion.webp?v=1782469278&width=600`, label: "Heart Notes", value: "Geranium, Rose, Cherry" },
  { img: `${CDN}/base_notes_orion.webp?v=1782469278&width=600`, label: "Base Notes", value: "Patchouli, Sandalwood, Musk" },
];

const PRICE = 1499;

type CartLine = { name: string; img: string; price: number; qty: number; tint: boolean };

const products = [
  { name: "Élora (100ml)", img: `${CDN}/orion_main_1.png?v=1786629639&width=240`, tint: false },
  { name: "Aurelle (100ml)", img: `${CDN}/2_0c83dd12-ed3d-4d50-a292-0f0871bff96b.webp?v=1785562501&width=240`, tint: true },
];

type Product = typeof products[number];

const sections = [
  { id: "description", label: "Description" },
  { id: "notes", label: "Notes" },
  { id: "apply", label: "How to apply" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    q: "How long does Élora last?",
    a: "Élora is a parfum at 25% oil concentration so it stays close and lasts long up to 8 hours depending on your skin, the weather and how much you apply.",
  },
  {
    q: "What does Élora smell like?",
    a: "Fresh and clean. It opens with lemon and lavender then softens with geranium and rose before settling into sandalwood and musk. The kind of scent that keeps up with you.",
  },
  {
    q: "Can I wear Élora every day?",
    a: "Yes. This is the everyday one fresh and easy and it carries you from work to travel and everything in between.",
  },
  {
    q: "Summer or winter?",
    a: "Both. Élora is at its best on warm days. Its citrus opening feels light and cooling and it wears well all year.",
  },
  {
    q: "When should I wear Élora?",
    a: "Any day you want to feel fresh and ahead. Mornings, work, travel or just the everyday.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Élora by Sarkar — Fresh Unisex Parfum 100ml" },
      {
        name: "description",
        content:
          "Élora by Sarkar, from Bhuvan Bam's fragrance collection. A fresh unisex parfum of lemon, lavender, geranium and sandalwood. 100ml at ₹1,499.",
      },
      { property: "og:title", content: "Élora by Sarkar — Fresh Unisex Parfum 100ml" },
      {
        property: "og:description",
        content:
          "Élora by Sarkar, from Bhuvan Bam's fragrance collection. A fresh unisex parfum of lemon, lavender, geranium and sandalwood. 100ml at ₹1,499.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: `${CDN}/orion_main_1.png?v=1786629639&width=1200` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${CDN}/orion_main_1.png?v=1786629639&width=1200` },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://www.sarkar.store", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "image",
        href: `${CDN}/orion_main_1.png?v=1786629639&width=800`,
        imageSrcSet: `${CDN}/orion_main_1.png?v=1786629639&width=480 480w, ${CDN}/orion_main_1.png?v=1786629639&width=800 800w`,
        imageSizes: "(max-width: 768px) 100vw, 560px",
        fetchpriority: "high",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Karla:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Élora (100ml)",
          image: [`${CDN}/orion_main_1.png?v=1786629639&width=1200`],
          description:
            "Bright citrus opens with vibrant energy. Geranium brings balance, while musk and sandalwood leave a fresh, lasting trail.",
          brand: { "@type": "Brand", name: "Sarkar" },
          offers: {
            "@type": "Offer",
            price: "1499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState<number | null>(0);
  const [selected, setSelected] = useState(0);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [zoom, setZoom] = useState(false);

  const product = products[selected]!;
  const cartCount = cart.reduce((n, l) => n + l.qty, 0);
  const cartTotal = cart.reduce((n, l) => n + l.qty * l.price, 0);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addToCart = () => {
    setCart((prev) => {
      const found = prev.find((l) => l.name === product.name);
      if (found) {
        return prev.map((l) => (l.name === product.name ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { name: product.name, img: product.img, price: PRICE, qty, tint: product.tint }];
    });
    setAdded(true);
    setCartOpen(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const setLineQty = (name: string, next: number) =>
    setCart((prev) =>
      next <= 0
        ? prev.filter((l) => l.name !== name)
        : prev.map((l) => (l.name === name ? { ...l, qty: next } : l)),
    );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-2 text-center text-[0.65rem] tracking-[0.22em] uppercase text-primary-foreground">
        Claim two 7ml freebies with every order
      </div>

      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-2xl tracking-[0.4em] text-primary">
            SARKAR
          </button>
          <nav className="hidden gap-8 text-xs tracking-[0.18em] uppercase text-muted-foreground md:flex">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="transition-colors hover:text-foreground">
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              Cart ({cartCount})
            </button>
            <button
              onClick={() => setMenuOpen((m) => !m)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="text-lg text-muted-foreground md:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/60 px-5 py-3 md:hidden">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="block w-full py-2 text-left text-xs tracking-[0.18em] uppercase text-muted-foreground"
              >
                {s.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Product */}
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-2 md:py-16">
          <div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={gallery[active]!.src}
                srcSet={gallery[active]!.srcSet}
                sizes="(max-width: 768px) 100vw, 560px"
                fetchPriority={active === 0 ? "high" : "auto"}
                decoding="async"
                alt={gallery[active]!.alt}
                onClick={() => setZoom(true)}
                className="h-full w-full cursor-zoom-in object-cover"
                width={1200}
                height={1200}
              />
              <button
                onClick={() => setActive((i) => (i - 1 + gallery.length) % gallery.length)}
                aria-label="Previous image"
                className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-border bg-background/70 px-3 py-2 text-sm backdrop-blur transition-colors hover:border-primary"
              >
                ‹
              </button>
              <button
                onClick={() => setActive((i) => (i + 1) % gallery.length)}
                aria-label="Next image"
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-border bg-background/70 px-3 py-2 text-sm backdrop-blur transition-colors hover:border-primary"
              >
                ›
              </button>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {gallery.map((g, i) => (
                <button
                  key={g.thumb}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`overflow-hidden rounded border transition-opacity ${
                    i === active ? "border-primary" : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={g.thumb} alt={g.alt} loading="lazy" decoding="async" width={160} height={160} className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:pt-4">
            <h1 className="font-display text-5xl md:text-6xl">
              {product.name.split(" ")[0]} <span className="text-muted-foreground">(100ml)</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Unisex", "Fresh", "Parfum"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Workdays · Morning runs · The everyday</p>
            <p className="mt-2 font-display text-2xl text-primary">
              It smells like citrus, lavender and early wins.
            </p>

            <div className="mt-7 flex items-baseline gap-3">
              <span className="text-3xl">₹ {PRICE.toLocaleString("en-IN")}</span>
              <span className="text-xs text-muted-foreground">Incl. of all taxes</span>
            </div>

            <div className="mt-8">
              <p className="eyebrow">Choose variants</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {products.map((v, i) => (
                  <button
                    key={v.name}
                    onClick={() => setSelected(i)}
                    aria-pressed={i === selected}
                    className={`rounded border bg-card p-2 text-center transition-colors ${
                      i === selected ? "border-primary" : "border-border hover:border-primary/60"
                    }`}
                  >
                    <img src={v.img} alt={v.name} loading="lazy" decoding="async" width={240} height={240} className={`aspect-square w-full object-contain ${v.tint ? "aurelle-bottle" : ""}`} />
                    <span className="mt-1 block text-[0.7rem] text-muted-foreground">{v.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="px-4 py-3 text-muted-foreground hover:text-foreground">−</button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="px-4 py-3 text-muted-foreground hover:text-foreground">+</button>
              </div>
              <button
                onClick={addToCart}
                className="flex-1 rounded bg-primary px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                {added ? "Added ✓" : "Add to cart"}
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">* Ships within 24-36 hours of ordering.</p>
          </div>
        </section>


        {/* Description */}
        <section id="description" className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="eyebrow">Product Description</p>
            <h2 className="mt-4 text-4xl">The everyday fresh</h2>
            <p className="mt-6 text-muted-foreground">
              Bright citrus opens with vibrant energy. Geranium brings balance, while musk and
              sandalwood leave a fresh, lasting trail.
            </p>
            <p className="mt-4 text-muted-foreground">
              Élora by Sarkar, from Bhuvan Bam's fragrance collection, is for the ones who move
              through every day with purpose and effortless confidence.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section id="notes" className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
            {notes.map((n) => (
              <article key={n.label} className="overflow-hidden rounded-lg border border-border bg-card text-center">
                <img src={n.img} alt={`${n.label}: ${n.value}`} loading="lazy" decoding="async" width={600} height={450} className="aspect-4/3 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-sm tracking-[0.24em] uppercase text-primary">{n.label}</h3>
                  <p className="mt-2 font-display text-2xl">{n.value}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Editorial */}
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-5">
            <img
              src={`${CDN}/formulated_full_orion_1.webp?v=1785903788&width=1000`}
              alt="Élora formulated with imported French oils"
              loading="lazy"
              className="w-full rounded-lg"
            />
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {["1_2.webp?v=1782469376", "orion_2_ae21bdea-92d4-4b1b-a1f2-2d6ee141dfd5.webp?v=1785562318", "3_2.webp?v=1782469376"].map((f) => (
                <img key={f} src={`${CDN}/${f}&width=600`} alt="Élora campaign imagery" loading="lazy" className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section id="apply" className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <p className="eyebrow">How To Apply</p>
            <h2 className="mt-4 mb-8 text-4xl">Spray, don't rub</h2>
            <img
              src={`${CDN}/Orion_6.png?v=1784547029&width=1200`}
              alt="How to apply Élora parfum"
              loading="lazy"
              className="w-full rounded-lg"
            />
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
              For best results, spray the perfume 15-20 cm away from your body, targeting pulse
              points such as the neck and wrists.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow text-center">FAQs</p>
            <h2 className="mt-4 mb-8 text-center text-4xl">Good to know</h2>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={open === i}
                  >
                    <span className="text-sm">{f.q}</span>
                    <span className="text-primary">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && <p className="pb-5 text-sm text-muted-foreground">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow">Legal Information</p>
            <h2 className="mt-4 text-3xl">SARKAR The One &amp; Only: Parfum</h2>
            <dl className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div><dt className="inline text-foreground">Alcohol Content: </dt><dd className="inline">Ethyl Alcohol Content: [95% v/v] Content: 75% w/w denatured with t-Butyl Alcohol and Denatonium Benzoate.</dd></div>
              <div><dt className="inline text-foreground">Ingredients: </dt><dd className="inline">Alcohol Denat., Fragrance</dd></div>
              <div><dt className="inline text-foreground">Caution: </dt><dd className="inline">For external use only. Avoid contact with eyes and irritated skin. Keep away from heat and flame. Store in a cool, dry place away from direct sunlight. Keep out of reach of children. Best before 3 years from the manufacturing date, specified on the pack.</dd></div>
              <div><dt className="inline text-foreground">Manufactured by: </dt><dd className="inline">Stella Indusstries Limited, Old Khandsa Road, Sector 37, HSIIDC, Gurugram 122 004, Haryana, India. M. L. No.: M.123-Cos-(H). Permit No.: L-42-A.</dd></div>
              <div><dt className="inline text-foreground">Marketed and Distributed by: </dt><dd className="inline">Brix Lifestyle Pvt. Ltd., Ground Floor, 241, Westend Marg, Saidulajab, New Delhi, Delhi- 110030, India.</dd></div>
              <div><dt className="inline text-foreground">Net Content: </dt><dd className="inline">e100 ml / 3.38 fl.oz · Country of origin: Made in India · MRP: ₹ 1,499.00</dd></div>
              <div><dt className="inline text-foreground">Customer Care: </dt><dd className="inline">+91 92177 55755 · support@sarkar.store</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5">
          <span className="font-display text-xl tracking-[0.4em] text-primary">SARKAR</span>
          <p className="text-xs text-muted-foreground">
            <a href="mailto:support@sarkar.store" className="hover:text-foreground">support@sarkar.store</a>
            {" · "}
            <a href="tel:+919217755755" className="hover:text-foreground">+91 92177 55755</a>
          </p>
          <p className="text-xs text-muted-foreground">www.sarkar.store · Made in India</p>
        </div>
      </footer>

      {/* Image lightbox */}
      {zoom && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 p-6"
          onClick={() => setZoom(false)}
        >
          <button onClick={() => setZoom(false)} aria-label="Close image" className="absolute top-5 right-6 text-2xl text-muted-foreground">
            ✕
          </button>
          <img src={gallery[active]!.full} alt={gallery[active]!.alt} className="max-h-full max-w-3xl rounded-lg object-contain" />
        </div>
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-background/70" onClick={() => setCartOpen(false)} />
          <aside className="relative flex h-full w-full max-w-sm flex-col border-l border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-lg">Your cart ({cartCount})</h2>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="text-xl text-muted-foreground hover:text-foreground">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <p className="mt-10 text-center text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((l) => (
                    <li key={l.name} className="flex gap-3 border-b border-border pb-4">
                      <img src={l.img} alt={l.name} className={`h-20 w-20 rounded border border-border object-contain ${l.tint ? "aurelle-bottle" : ""}`} />
                      <div className="flex-1">
                        <p className="text-sm">{l.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">₹ {l.price.toLocaleString("en-IN")}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex items-center rounded border border-border">
                            <button onClick={() => setLineQty(l.name, l.qty - 1)} aria-label={`Decrease ${l.name}`} className="px-2.5 py-1 text-muted-foreground hover:text-foreground">−</button>
                            <span className="w-6 text-center text-xs">{l.qty}</span>
                            <button onClick={() => setLineQty(l.name, l.qty + 1)} aria-label={`Increase ${l.name}`} className="px-2.5 py-1 text-muted-foreground hover:text-foreground">+</button>
                          </div>
                          <button onClick={() => setLineQty(l.name, 0)} className="text-xs text-muted-foreground underline hover:text-foreground">
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹ {cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes · 2 free 7ml samples added</p>
              <button
                disabled={cart.length === 0}
                onClick={() => setCartOpen(false)}
                className="mt-4 w-full rounded bg-primary px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
