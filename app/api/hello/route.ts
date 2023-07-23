import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ data: "hello" });
}

export async function POST(req: Request) {
  //достаем данные из реквеста {"что-то":"что-то еще",...}
  const x = await req.json();

  //отдаем их в респонсе
  return NextResponse.json({ x });
}

type Data = {
  someWord: string;
};
