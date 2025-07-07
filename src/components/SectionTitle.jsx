const SectionTitle = ({ category, title, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="text-muted uppercase text-lg font-semibold mb-2 lg:text-[18px] leading-6 lg:leading-[27px]">{category}</p>
      <h2 className="text-2xl font-bold text-section-title sm:text-3xl lg:text-[50px] leading-tight lg:leading-[65px] capitalize">{title}</h2>
    </div>
  );
};

export default SectionTitle;

