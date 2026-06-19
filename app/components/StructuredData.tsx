import { buildStructuredData } from "../lib/seo";

type StructuredDataProps = {
  hostname: string;
};

export default function StructuredData({ hostname }: StructuredDataProps) {
  const data = buildStructuredData(hostname);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
