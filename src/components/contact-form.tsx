import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-1.5">
        <Input type="text" name="name" placeholder="이름" required />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Input type="email" name="email" placeholder="이메일" required />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Textarea name="message" placeholder="메시지" rows={5} required />
      </div>
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">전송</Button>
    </form>
  );
} 