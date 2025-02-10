/**
 * Next.js için özel bağlantı (Link) bileşeni.
 *
 * - `NextLink` kullanarak sayfalar arasında geçiş yapmayı sağlar.
 * - Fare linkin üzerine geldiğinde **otomatik önyükleme (Prefetching)** özelliğini ekler.
 * - `useState` ve `useEffect` kullanarak önyükleme durumunu yönetir.
 * - `useRef` ile bağlantı elemanına erişerek olay dinleyicileri ekler.
 * - Bileşen kaldırıldığında olay dinleyicileri temizlenir.
 */

"use client"; // Bu bileşenin sadece istemci tarafında çalışacağını belirtir.

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";

// Bileşenin alabileceği özellikleri tanımlayan tür (type)
type CustomLinkProps = NextLinkProps & {
  children: React.ReactNode;
  href: string;
  target?: string;
} & HTMLAttributes<HTMLAnchorElement>;

const Link: FC<CustomLinkProps> = ({ children, href, ...rest }) => {
  const [prefetching, setPrefetching] = useState(false); // Önyükleme durumunu yönetmek için state
  const linkRef = useRef<HTMLAnchorElement>(null); // Bağlantı elemanına referans almak için

  // Fare linkin üzerine geldiğinde önyüklemeyi etkinleştir
  const setPrefetchListener = () => setPrefetching(true);
  // Fare linkten ayrıldığında önyüklemeyi devre dışı bırak
  const removePrefetchListener = () => setPrefetching(false);

  // Bileşen yüklendiğinde olay dinleyicilerini ekler, kaldırıldığında temizler
  useEffect(() => {
    const linkElement = linkRef.current;
    linkElement?.addEventListener("mouseover", setPrefetchListener);
    linkElement?.addEventListener("mouseleave", removePrefetchListener);
    return () => {
      linkElement?.removeEventListener("mouseover", setPrefetchListener);
      linkElement?.removeEventListener("mouseleave", removePrefetchListener);
    };
  }, [prefetching]);

  return (
    // Bağlantıyı NextLink ile sarmalayarak önyükleme desteği ekler
    <NextLink href={href} ref={linkRef} prefetch={prefetching} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
