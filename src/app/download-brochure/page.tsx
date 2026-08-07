import { redirect } from "next/navigation";

export default function DownloadBrochurePage() {
  const whatsappUrl = `https://wa.me/918446284162?text=${encodeURIComponent(
    "Hello JVM Institute team! I would like to inquire about your Data Engineering & Tech courses, upcoming batches, and fee details."
  )}`;

  redirect(whatsappUrl);
}
