import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Antunes & Martins"
              width={120}
              height={120}
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 text-sm text-pretty">
              Advocacia especializada com excelência, ética e dedicação aos nossos clientes.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#quem-somos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#areas" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Informações Legais</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>OAB/SP 123.456</li>
              <li>OAB/SP 789.012</li>
              <li className="pt-2">CNPJ: 00.000.000/0001-00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Antunes & Martins Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
