import { categories } from "@/data/foodData";

interface CategoriesProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory?: string;
}

const Categories = ({ onCategorySelect, selectedCategory }: CategoriesProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Category
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover your favorite dishes from our wide selection of categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`
                group relative p-6 rounded-2xl border transition-smooth
                hover:shadow-hover hover:scale-105 hover:-translate-y-1
                ${selectedCategory === category.id 
                  ? 'bg-gradient-primary text-primary-foreground border-primary shadow-glow' 
                  : 'bg-card hover:bg-accent border-border'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center animate-scale-in">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-smooth">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-sm md:text-base">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;