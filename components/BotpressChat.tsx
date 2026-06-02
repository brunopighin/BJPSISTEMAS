"use client";

import Script from "next/script";
import { useState } from "react";

export default function BotpressChat() {
  const [injectReady, setInjectReady] = useState(false);

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
        onLoad={() => setInjectReady(true)}
      />
      {injectReady && (
        <Script
          src="https://files.bpcontent.cloud/2026/06/02/02/20260602020450-MIJGFTK4.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
