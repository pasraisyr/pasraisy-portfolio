export default function BackgroundIcons() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      {/* Base Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-[#0f1016] to-[#1a1b26]" />
      
      {/* Tiled Pattern */}
      <div className="absolute inset-0 bg-pattern animate-scroll" />
      
      {/* Overlay Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(192,132,252,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(129,140,248,0.1),transparent_50%)]" />
    </div>
  )
}

