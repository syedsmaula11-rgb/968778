"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    const track = async () => {
      try {
        const ipData = await fetch("https://api.ipify.org?format=json").then(r => r.json());

        const source =
          new URLSearchParams(window.location.search).get("utm_source") ||
          document.referrer ||
          "Direct";

        await fetch(
          "https://script.google.com/macros/s/AKfycbzpr2NXSvy3TMcRpIbyz2tuJ29HIUfLItJYX7Yi13tYqzpenDHp-8tG8rocXkPYEIwm/exec",
          {
            method: "POST",
            body: JSON.stringify({
              time: new Date().toLocaleString(),
              ip: ipData.ip,
              device: /Mobi/i.test(navigator.userAgent)
                ? "Mobile"
                : "PC",
              browser: navigator.userAgent,
              source: source.includes("google")
                ? "Google Ads"
                : source,
              page: window.location.pathname,
            }),
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    track();
  }, []);

  return null;
}
