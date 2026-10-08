import { booking } from "@/content/booking";
import { pageMetadata } from "@/lib/seo";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata = pageMetadata("vi", "/booking/", { title: booking.vi.title, description: booking.vi.lede });

export default function Page() {
  return <BookingForm locale="vi" />;
}
