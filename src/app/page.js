"use client";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-500 to-indigo-300 p-6">
  <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
    <AddTodo />
    <Todos />
  </div>
</main>
  );
}
