"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Group, Photo } from "@/lib/photos";
import { cdn, thumb } from "@/lib/cdn";

export default function Gallery({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState<number | null>(null);

  const total = useMemo(
    () => groups.reduce((n, g) => n + g.photos.length, 0),
    [groups],
  );

  const shown = useMemo(
    () => (active === "all" ? groups : groups.filter((g) => g.slug === active)),
    [active, groups],
  );

  // Flat list in display order — the lightbox walks through this.
  const flat = useMemo(() => shown.flatMap((g) => g.photos), [shown]);

  function pick(slug: string) {
    setActive(slug);
    setOpen(null);
  }

  let offset = 0;

  return (
    <>
      <div className="chips" role="group" aria-label="Filter by location">
        <button
          type="button"
          className="chip"
          aria-pressed={active === "all"}
          onClick={() => pick("all")}
        >
          all <span className="muted">{total}</span>
        </button>
        {groups.map((g) => (
          <button
            key={g.slug}
            type="button"
            className="chip"
            aria-pressed={active === g.slug}
            onClick={() => pick(g.slug)}
          >
            {g.name.toLowerCase()} <span className="muted">{g.photos.length}</span>
          </button>
        ))}
      </div>

      {shown.map((g) => {
        const start = offset;
        offset += g.photos.length;
        return (
          <section key={g.slug} className="loc" aria-label={g.name}>
            <h2 className="cmd">
              <span className="ps">$</span>ls {g.slug}/{" "}
              <span className="muted">— {g.photos.length} files</span>
            </h2>
            <div className="masonry">
              {g.photos.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className="tile"
                  onClick={() => setOpen(start + i)}
                  aria-label={`Open ${p.title ?? g.name} photo ${i + 1} of ${g.photos.length}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumb(p.src)}
                    alt={p.title ?? `${g.name} photo`}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: `${p.width} / ${p.height}` }}
                  />
                </button>
              ))}
            </div>
          </section>
        );
      })}

      {open !== null && flat[open] && (
        <Lightbox
          photos={flat}
          index={open}
          setIndex={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}

function Lightbox({
  photos,
  index,
  setIndex,
  onClose,
}: {
  photos: Photo[];
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const n = photos.length;
  const p = photos[index];

  const go = useCallback(
    (d: number) => setIndex((index + d + n) % n),
    [index, n, setIndex],
  );

  // <dialog> gives us the backdrop, focus trap and Esc handling.
  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  // Warm the cache for the neighbours so next/prev feels instant.
  useEffect(() => {
    for (const d of [1, -1, 2]) {
      const q = photos[(index + d + n * 3) % n];
      if (q) new Image().src = cdn(q.src);
    }
  }, [index, n, photos]);

  return (
    <dialog
      ref={ref}
      className="lb"
      aria-label="Photo viewer"
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        else if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="lb-bar">
        <span>
          <span className="accent">{p.location.toLowerCase()}</span>
          {p.title ? ` · ${p.title}` : ""}
          <span className="muted">
            {" "}
            · {index + 1}/{n}
          </span>
        </span>
        <button
          type="button"
          className="lb-btn"
          onClick={() => ref.current?.close()}
          aria-label="Close"
        >
          [ esc ✕ ]
        </button>
      </div>

      <div
        className="lb-stage"
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current?.close();
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={p.id}
          className="lb-img"
          src={cdn(p.src)}
          alt={p.title ?? `${p.location} photo`}
          style={{ aspectRatio: `${p.width} / ${p.height}` }}
        />
      </div>

      <div className="lb-nav">
        <button type="button" className="lb-btn" onClick={() => go(-1)}>
          [ ← prev ]
        </button>
        <button type="button" className="lb-btn" onClick={() => go(1)}>
          [ next → ]
        </button>
      </div>
    </dialog>
  );
}
