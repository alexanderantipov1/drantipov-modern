import { CaseCard } from "./CaseCard"

interface Case {
  id: string
  title: string
  category: string
  imagePath: string
  procedures?: string[]
}

interface CaseGridProps {
  cases: Case[]
  columns?: 2 | 3 | 4
}

export function CaseGrid({ cases, columns = 3 }: CaseGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {cases.map((caseItem, index) => (
        <CaseCard
          key={caseItem.id}
          id={caseItem.id}
          title={caseItem.title}
          category={caseItem.category}
          imagePath={caseItem.imagePath}
          procedures={caseItem.procedures}
          index={index}
        />
      ))}
    </div>
  )
}
