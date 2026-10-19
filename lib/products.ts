export type Product = {
  id: string
  name: string
  code: string
  category: string
  price: number
  oldPrice?: number
  image: string
  description: string
  badge?: string
}

export const categories = [
  { name: 'Freios', icon: '◉', image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=900&q=85' },
  { name: 'Filtros', icon: '▣', image: 'https://images.unsplash.com/photo-1635784063382-8b7c5e8b15f5?auto=format&fit=crop&w=900&q=85' },
  { name: 'Suspensão', icon: '⟡', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=85' },
  { name: 'Motor', icon: '◈', image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85' },
  { name: 'Iluminação', icon: '✦', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=85' },
  { name: 'Elétrica', icon: '⌁', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85' },
  { name: 'Arrefecimento', icon: '❋', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Acessórios', icon: '◇', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85' },
]

export const products: Product[] = [
  { id: 'pastilha-freio', name: 'Pastilha de Freio Cerâmica', code: 'MCB-2401', category: 'Freios', price: 89.9, oldPrice: 119.9, badge: 'Mais vendido', image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=900&q=85', description: 'Componente demonstrativo para uma frenagem segura e progressiva.' },
  { id: 'filtro-ar', name: 'Filtro de Ar Premium', code: 'MFA-1082', category: 'Filtros', price: 42.5, image: 'https://images.unsplash.com/photo-1635784063382-8b7c5e8b15f5?auto=format&fit=crop&w=900&q=85', description: 'Filtragem eficiente para manter o sistema de admissão protegido.' },
  { id: 'amortecedor', name: 'Amortecedor Dianteiro', code: 'MSU-3308', category: 'Suspensão', price: 289.9, oldPrice: 339.9, badge: 'Oferta', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=85', description: 'Solução ilustrativa para estabilidade e conforto na condução.' },
  { id: 'vela-ignicao', name: 'Jogo de Velas de Ignição', code: 'MMO-0754', category: 'Motor', price: 74.9, image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85', description: 'Ignição consistente para o funcionamento do motor.' },
  { id: 'lampada-led', name: 'Lâmpada LED H7', code: 'MIL-4210', category: 'Iluminação', price: 129.9, badge: 'Novo', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=85', description: 'Iluminação clara para destacar sua jornada.' },
  { id: 'bateria', name: 'Bateria Automotiva 60Ah', code: 'MEL-6012', category: 'Elétrica', price: 449.9, oldPrice: 499.9, image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85', description: 'Energia para os momentos essenciais do seu veículo.' },
  { id: 'radiador', name: 'Aditivo para Radiador', code: 'MAR-2019', category: 'Arrefecimento', price: 39.9, image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85', description: 'Proteção demonstrativa para o sistema de arrefecimento.' },
  { id: 'tapete', name: 'Tapete Automotivo Black', code: 'MAC-9087', category: 'Acessórios', price: 159.9, badge: 'Destaque', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85', description: 'Acabamento funcional para deixar o interior mais organizado.' },
  { id: 'disco-freio', name: 'Disco de Freio Ventilado', code: 'MCB-1180', category: 'Freios', price: 219.9, image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=900&q=85', description: 'Peça demonstrativa de alta resistência térmica.' },
  { id: 'filtro-oleo', name: 'Filtro de Óleo Sintético', code: 'MFA-4051', category: 'Filtros', price: 31.9, image: 'https://images.unsplash.com/photo-1635784063382-8b7c5e8b15f5?auto=format&fit=crop&w=900&q=85', description: 'Auxilia na limpeza do óleo do motor.' },
  { id: 'correia', name: 'Correia de Acessórios', code: 'MMO-5098', category: 'Motor', price: 68.9, image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85', description: 'Componente ilustrativo para transmissão de movimento.' },
  { id: 'palheta', name: 'Palheta de Para-brisa', code: 'MAC-1124', category: 'Acessórios', price: 54.9, image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=85', description: 'Visibilidade para acompanhar cada caminho.' },
]
