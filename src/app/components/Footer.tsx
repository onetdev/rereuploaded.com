import { Link } from "@heroui/link";

export default function Footer() {
  return (
    <footer className="w-full flex px-6 gap-4 items-center justify-between py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://onet.dev?utm_source=rereuploaded"
        title="onet.dev homepage"
      >
        <span>by</span>
        <span className="text-primary">Konrad Koller</span>
      </Link>
      <div>&copy; 2025 ReReUploaded.com; All rights reserved.</div>
    </footer>
  )
}
