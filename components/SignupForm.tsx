"use client";

import { useState, FormEvent } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [interests, setInterests] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          neighborhood,
          interests,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("Thanks for signing up! We'll be in touch soon.");
      setEmail("");
      setNeighborhood("");
      setInterests("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to sign up. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="neighborhood"
          className="block text-sm font-medium text-stone-700"
        >
          Neighborhood (Minneapolis area)
        </label>
        <input
          type="text"
          id="neighborhood"
          required
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          placeholder="e.g., Uptown, Northeast, etc."
        />
      </div>

      <div>
        <label
          htmlFor="interests"
          className="block text-sm font-medium text-stone-700"
        >
          What interests you? (optional)
        </label>
        <textarea
          id="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          placeholder="e.g., Testing paper prototypes, hosting meetups, learning about local-first software..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-amber-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Signing up..." : "Count me in"}
      </button>

      {message && (
        <div
          role="alert"
          className={`rounded-md p-4 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
