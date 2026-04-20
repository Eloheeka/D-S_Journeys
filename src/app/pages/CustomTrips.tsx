import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Calendar, Users, Mail, User } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  groupSize: string;
  destinations: string[];
  budget: string;
  message: string;
}

export function CustomTrips() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const destinations = ["Rwanda", "Tanzania", "Kenya", "Uganda", "Zanzibar"];
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    if (!web3FormsAccessKey) {
      toast.error("Email service is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to continue.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `Custom trip request from ${data.fullName}`,
          from_name: "D&S Journeys",
          replyto: data.email,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone || "Not provided",
          travelDates: data.travelDates,
          groupSize: data.groupSize,
          destinations: data.destinations.join(", "),
          budget: data.budget || "Not provided",
          message: data.message || "No additional details provided.",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your request right now.");
      }

      toast.success("Thank you! Your custom trip request has been sent successfully.");
      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your request right now.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ea-terracotta)] to-[var(--ea-sage)]" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Custom Trips</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Tell us your vision, and we'll create the perfect itinerary just for you
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Plan Your Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Share your preferences with us, and our expert team will craft a personalized
            safari experience tailored to your interests, schedule, and budget.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm">
                Full Name <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Email Address <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Preferred Travel Dates <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  {...register("travelDates", { required: "Travel dates are required" })}
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all"
                  placeholder="e.g., June 2026 or flexible"
                />
              </div>
              {errors.travelDates && (
                <p className="text-destructive text-sm mt-1">{errors.travelDates.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm">
                Group Size <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <select
                  {...register("groupSize", { required: "Group size is required" })}
                  className="w-full pl-10 pr-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select group size</option>
                  <option value="1">Solo traveler</option>
                  <option value="2">2 people</option>
                  <option value="3-4">3-4 people</option>
                  <option value="5-8">5-8 people</option>
                  <option value="9+">9+ people</option>
                </select>
              </div>
              {errors.groupSize && (
                <p className="text-destructive text-sm mt-1">{errors.groupSize.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Budget Range (per person)
              </label>
              <select
                {...register("budget")}
                className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all appearance-none"
              >
                <option value="">Select budget range</option>
                <option value="under-3000">Under $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-8000">$5,000 - $8,000</option>
                <option value="8000-12000">$8,000 - $12,000</option>
                <option value="12000+">$12,000+</option>
              </select>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <label className="block mb-3 text-sm">
              Destinations of Interest <span className="text-destructive">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {destinations.map((dest) => (
                <label
                  key={dest}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    {...register("destinations", {
                      required: "Please select at least one destination",
                    })}
                    type="checkbox"
                    value={dest}
                    className="w-4 h-4 border-border text-[var(--ea-terracotta)] focus:ring-[var(--ea-terracotta)]"
                  />
                  <span className="text-sm group-hover:text-[var(--ea-terracotta)] transition-colors">
                    {dest}
                  </span>
                </label>
              ))}
            </div>
            {errors.destinations && (
              <p className="text-destructive text-sm mt-2">{errors.destinations.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm">
              Tell Us About Your Dream Safari
            </label>
            <textarea
              {...register("message")}
              rows={6}
              className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-[var(--ea-terracotta)] focus:border-transparent transition-all resize-none"
              placeholder="What are you most excited to experience? Any specific activities, accommodations, or special requests?"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Submit Request
                  <Send size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--ea-terracotta)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                1
              </div>
              <h3 className="mb-2">We Review</h3>
              <p className="text-muted-foreground text-sm">
                Our team carefully reviews your preferences and interests
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--ea-sage)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                2
              </div>
              <h3 className="mb-2">We Connect</h3>
              <p className="text-muted-foreground text-sm">
                We'll reach out within 24 hours to discuss your vision
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--ea-golden)] text-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                3
              </div>
              <h3 className="mb-2">We Create</h3>
              <p className="text-muted-foreground text-sm">
                A personalized itinerary crafted just for you
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
