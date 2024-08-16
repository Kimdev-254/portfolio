// src/components/ui/icon-cloud.js

export default function IconCloud({ iconSlugs }) {
  return (
    <div className="icon-cloud">
      <p>Icon Cloud</p>
      <ul className="icon-list">
        {iconSlugs.map((slug) => (
          <li key={slug} className="icon-item">
            {slug}
          </li>
        ))}
      </ul>
    </div>
  )
}
