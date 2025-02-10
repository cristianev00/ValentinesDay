"use client";

import { useState } from "react";
import formbricks from "@formbricks/js";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function MessageForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const authorizedPhoneNumber =
      process.env.NEXT_PUBLIC_AUTHORIZED_PHONE_NUMBER;

    if (phoneNumber !== authorizedPhoneNumber) {
      setStatus("Unauthorized phone number.");

      toast.error("Unauthorized phone number.");
      return;
    }

    try {
      formbricks.track("message_form_submission");
      setStatus("Message sent successfully!");
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message.");
      toast.error("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
    >
      <div>
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          required
          className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300"
        />
      </div>
      <Button
        type="submit"
        className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
      >
        Send Message
      </Button>
      {status && (
        <p
          className={`text-center mt-4 font-semibold ${
            status === "Unauthorized phone number."
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
