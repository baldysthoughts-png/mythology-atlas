# Mythology Atlas — Phase 1 Prototype (Mesopotamia)

A working prototype of the Mythology Atlas navigation, entity system, and evidence-classification
UI, built on Architecture Finalization v0.4. This is a small seed dataset proving the
architecture — not a production database or final visual design.

## Run it yourself (beginner-friendly)

You need Node.js installed (version 18 or newer works well) — https://nodejs.org

1. Unzip this project folder somewhere on your computer.
2. Open a terminal and move into the folder:
   cd mythology-atlas
3. Install the dependencies (one-time step):
   npm install
4. Start the app:
   npm run dev
5. Your terminal will print a local address, usually http://localhost:5173 — open that in
   your browser.
6. To stop the app, go back to the terminal and press Ctrl + C.

To try it on your phone on the same Wi-Fi network, run `npm run dev -- --host` instead, then
open the "Network" address it prints, on your phone's browser.

## What to click on first

- From Home, tap "Start Exploring" -> "Sumer" -> "Enki" -> "Enlil" (under Related Figures).
- From Home, tap "Library" -> "Deities" -> "Enki".
- From Home, tap the search bar -> type "Ea" -> tap "Enki".

All three paths land on the same Enki entry. Use your browser's back button (or the back
gesture on mobile) to retrace your steps; tapping "Mythology Atlas" in the header always
jumps straight back to Home.
