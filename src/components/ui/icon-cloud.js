// src/components/ui/icon-cloud.js
export default function IconCloud({ iconSlugs }) {
  return (
    <div>
      <p>Icon Cloud Placeholder</p>
      <ul>
        {iconSlugs.map((slug) => (
          <li key={slug}>{slug}</li>
        ))}
      </ul>
    </div>
  )
}
