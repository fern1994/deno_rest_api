import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

// กำหนด Port
const port = 3001;

// Application เป็น class ที่คลุม serve ใน std package ของ http ไว้อีกที
// มี 2 method ให้ใช้คือ use() และ listen()
const app = new Application();

// use() ไว้สำหรับเพิ่ม middleware (พวก route)
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

// listen() ไว้สำหรับ start serve
await app.listen({ port });
