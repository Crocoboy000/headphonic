import { Star } from "lucide-react";

const stats = [
  {
    value: "12k+",
    label: "Daily Orders",
    color: "text-primary",
  },
  {
    value: "50K+",
    label: "Registered User",
    color: "text-secondary",
  },
  {
    value: "4.5",
    label: "42K+ Review",
    color: "text-tertiary",
    star: true,
  },
];

export default function Stats() {
  return (
    <section className="bg-light md:p-2 w-full py-4 max-w-8xl mx-auto px-5">


        <div className="hidden md:flex items-center justify-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex justify-between items-center gap-5">

              <div className="flex flex-col items-center gap-2 px-28">
                <span
                  className={`text-4xl lg:text-5xl font-black tracking-tight ${stat.color} flex items-center gap-1`}
                >
                  {stat.value}
                  {stat.star && (
                    <Star
                      size={28}
                      className="text-tertiary fill-tertiary"
                    />
                  )}
                </span>
                <span className="text-neutral/70 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <div className="w-[5px] h-19 bg-primary rounded-full" />
              )}
            </div>
          ))}
        </div>


        <div className="grid grid-cols-2   md:hidden gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center">

              <div className="flex flex-col items-center gap-2 py-8">
                <span
                  className={`text-4xl font-black tracking-tight ${stat.color} flex items-center gap-1`}
                >
                  {stat.value}
                  {stat.star && (
                    <Star
                      size={24}
                      className="text-tertiary fill-tertiary"
                    />
                  )}
                </span>
                <span className="text-neutral/70 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <div className="h-[5px] w-19 bg-primary rounded-full" />
              )}
            </div>
          ))}
        </div>
    </section>
  );
}