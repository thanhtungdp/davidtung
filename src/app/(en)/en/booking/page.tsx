import { booking } from "@/content/booking";
import { pageMetadata } from "@/lib/seo";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata = pageMetadata("en", "/booking/", { title: booking.en.title, description: booking.en.lede });

export default function Page() {
  return <BookingForm locale="en" />;
}
