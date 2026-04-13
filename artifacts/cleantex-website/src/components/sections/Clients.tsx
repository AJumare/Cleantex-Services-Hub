import { motion } from "framer-motion";

const clients = [
  {
    name: "Central Bank of Nigeria",
    acronym: "CBN",
    logo: "/images/cbn-logo.png",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-800",
  },
  {
    name: "National Pension Commission",
    acronym: "PenCom",
    logo: null,
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-800",
  },
  {
    name: "Nigeria Deposit Insurance Corporation",
    acronym: "NDIC",
    logo: null,
    color: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-800",
  },
  {
    name: "Candace Beauty Solutions",
    acronym: "CBS",
    logo: null,
    color: "bg-pink-50 border-pink-200",
    textColor: "text-pink-700",
  },
];

export function Clients() {
  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2">Trusted By</p>
          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
            Organisations That Trust Cleantex
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.acronym}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl border-2 ${client.color} min-w-[180px] shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <span className={`text-2xl font-extrabold font-display tracking-tight ${client.textColor}`}>
                  {client.acronym}
                </span>
              )}
              <span className="text-xs text-center text-muted-foreground font-medium leading-tight max-w-[140px]">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
