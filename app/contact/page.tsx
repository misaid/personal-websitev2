"use client";
// External imports
import React from "react";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

// Internal imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name_8403705091: z.string().min(1, "Name is required"),
  name_4765427973: z.string().email("Invalid email address"),
  name_2543664404: z.string().min(1, "Message is required"),
});

/**
 * The Contact page component
 * @returns {JSX.Element} - The Contact page
 */
export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_8403705091: "",
      name_4765427973: "",
      name_2543664404: "",
    },
  });

  /**
   * Handles the form submission
   * @param values - The form values
   */
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      //console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        toast.error("Failed to submit the form. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="max-w-[740px] mx-auto justify-center mt-24">
      <Toaster />
      <div className="mb-[300px] flex flex-col mx-5 space-y-4 justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Contact Me.
        </h1>
        <div className="items-center flex space-x-2 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <FormField
                    control={form.control}
                    name="name_8403705091"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <Input
                            className="text-base"
                            placeholder="Name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormField
                    control={form.control}
                    name="name_4765427973"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <Input
                            className="text-base"
                            placeholder="Email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="name_2543664404"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        className="text-base resize-none h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant={"outline"} type="submit">
                Submit
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting this form, I agree to the{" "}
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                >
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
