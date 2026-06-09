interface FormationCardProps {
  title: string
  imageUrl: string
}

export default function FormationCard({ title, imageUrl }: FormationCardProps) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden group cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-[#0d0d0d] font-medium text-sm">{title}</p>
      </div>
      <button className="absolute bottom-4 right-4 bg-[#00c5d5] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-[#0097a7] transition-colors">
        →
      </button>
    </div>
  )
}
