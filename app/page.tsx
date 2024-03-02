'use client'

import Image from "next/image";
import { useState } from 'react'
import Header from "@/app/ui/header"

export default function Home() {
  const [theme, setTheme] = useState("light")

  function toggleTheme(e) {
    let body = document.getElementsByTagName("body")[0]

    if (e.target.checked) {
        setTheme('dark')
        body.classList.remove("bg-light")
        body.classList.add("bg-dark")
    } else {
        setTheme('light')
        body.classList.remove("bg-dark")
        body.classList.add("bg-light")
    }
  }

  return (
    <main className={`bg-${theme}`}>
      <Header theme={theme} onChange={toggleTheme} />

    </main>
  );
}
