import { CheckCircle2, Shield, Wrench, Wind, Building2, Home } from "lucide-react";

export const services = [
  {
    id: "instalacao",
    title: "Instalação",
    shortDescription: "Instalação correta e segura de equipamentos residenciais e comerciais.",
    icon: Wrench,
    whatsappMessage: "Olá! Vi o serviço de instalação de ar-condicionado no site e gostaria de solicitar um orçamento.",
    features: ["Dimensionamento correto", "Furação limpa", "Teste de pressão", "Garantia do serviço"]
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção Preventiva",
    shortDescription: "Inspeções periódicas para reduzir falhas e aumentar a vida útil dos equipamentos.",
    icon: Shield,
    whatsappMessage: "Olá! Gostaria de saber mais sobre contratos ou visitas de manutenção preventiva.",
    features: ["Limpeza de filtros", "Verificação de gás", "Medição de corrente", "Prevenção de quebras"]
  },
  {
    id: "manutencao-corretiva",
    title: "Manutenção Corretiva",
    shortDescription: "Diagnóstico preciso e reparo de problemas no seu sistema de climatização.",
    icon: CheckCircle2,
    whatsappMessage: "Olá! Preciso de manutenção em um ar-condicionado que apresenta problemas.",
    features: ["Diagnóstico rápido", "Troca de peças", "Correção de vazamentos", "Equipamento testado"]
  },
  {
    id: "higienizacao",
    title: "Higienização",
    shortDescription: "Limpeza profissional profunda para melhorar a qualidade do ar e a saúde.",
    icon: Wind,
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para higienização de ar-condicionado.",
    features: ["Desmontagem das partes", "Aplicação de bactericida", "Limpeza da turbina", "Melhora na refrigeração"]
  }
];
