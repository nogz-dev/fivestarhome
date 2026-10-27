// Dados de exemplo compartilhados pelo app (index.html) e pelo painel (admin.html).
// Na Fase 1 este arquivo sai e os dados passam a vir do banco.
window.FSH_DEMO = (function(){
  const PLANS = { essential:{ name:'Essential Care', price:249 }, premium:{ name:'Premium', price:499 }, vip:{ name:'VIP', price:999 } };
  const clients = [
    { id:1, name:'Ana Souza', since:'03/2025', pay:'ok' },
    { id:2, name:'Carlos Mendes', since:'11/2024', pay:'ok' },
    { id:3, name:'Juliana Prado', since:'06/2025', pay:'due' },
    { id:4, name:'Ricardo Alves', since:'02/2024', pay:'ok' },
    { id:5, name:'Fernanda Lima', since:'08/2025', pay:'ok' },
    { id:6, name:'Marcos Teixeira', since:'09/2023', pay:'ok' },
    { id:7, name:'Patrícia Rocha', since:'01/2026', pay:'due' },
    { id:8, name:'Bruno Carvalho', since:'04/2026', pay:'late' },
    { id:9, name:'Camila Duarte', since:'07/2026', pay:'ok' },
    { id:10, name:'Daniel Moreira', since:'05/2025', pay:'ok' },
    { id:11, name:'Helena Costa', since:'10/2025', pay:'late' },
    { id:12, name:'Gustavo Ribeiro', since:'09/2026', pay:'due' },
    { id:13, name:'Mark Thompson', since:'03/2026', pay:'ok' },
    { id:14, name:'Sarah Mitchell', since:'10/2026', pay:'due' }
  ];
  const props = [
    { id:'p1', client:1, name:'Casa em Windermere', city:'Orlando', plan:'premium', use:'Airbnb', last:'22/10', status:'attn' },
    { id:'p2', client:1, name:'Apartamento em Brickell', city:'Miami', plan:'essential', use:'Família', last:'12/10', status:'ok' },
    { id:'p3', client:2, name:'Villa em Kissimmee', city:'Kissimmee', plan:'vip', use:'Airbnb', last:'23/10', status:'ok' },
    { id:'p4', client:3, name:'Townhome em Lake Nona', city:'Orlando', plan:'essential', use:'Fechado', last:'27/10', status:'ok' },
    { id:'p5', client:4, name:'Casa em Celebration', city:'Orlando', plan:'premium', use:'Família', last:'27/10', status:'ok' },
    { id:'p6', client:4, name:'Condo em Sunny Isles', city:'Miami', plan:'premium', use:'Aluguel longo', last:'20/10', status:'ok' },
    { id:'p7', client:5, name:'Apartamento em Brickell', city:'Miami', plan:'premium', use:'Família', last:'21/10', status:'attn' },
    { id:'p8', client:6, name:'Casa em Dr. Phillips', city:'Orlando', plan:'vip', use:'Família', last:'26/10', status:'ok' },
    { id:'p9', client:7, name:'Villa em Davenport', city:'Orlando', plan:'premium', use:'Airbnb', last:'19/10', status:'late' },
    { id:'p10', client:8, name:'Condo em Doral', city:'Miami', plan:'essential', use:'Fechado', last:'05/10', status:'ok' },
    { id:'p11', client:9, name:'Casa em Winter Garden', city:'Orlando', plan:'premium', use:'Família', last:'24/10', status:'ok' },
    { id:'p12', client:10, name:'Apartamento em Miami Beach', city:'Miami', plan:'vip', use:'VRBO', last:'26/10', status:'attn' },
    { id:'p13', client:11, name:'Townhome em Kissimmee', city:'Kissimmee', plan:'essential', use:'Airbnb', last:'08/10', status:'ok' },
    { id:'p14', client:11, name:'Casa em Clermont', city:'Orlando', plan:'essential', use:'Fechado', last:'15/10', status:'ok' },
    { id:'p15', client:12, name:'Casa em Windermere', city:'Orlando', plan:'premium', use:'Família', last:'—', status:'new' },
    { id:'p16', client:13, name:'Condo em Aventura', city:'Miami', plan:'premium', use:'Aluguel longo', last:'22/10', status:'ok' },
    { id:'p17', client:14, name:'Casa em Winter Park', city:'Orlando', plan:'essential', use:'Família', last:'—', status:'new' }
  ];
  const tickets = [
    { id:101, title:'Vazamento na torneira da cozinha', prop:'p1', prio:'alta', opened:'24/10', who:'Matheus', status:'andamento' },
    { id:102, title:'Limpeza do dreno do AC da sala', prop:'p1', prio:'normal', opened:'22/10', who:'Matheus', status:'autorizacao' },
    { id:103, title:'Infiltração no teto do banheiro', prop:'p7', prio:'alta', opened:'21/10', who:'Jessica', status:'andamento' },
    { id:104, title:'Fechadura eletrônica sem bateria', prop:'p12', prio:'urgente', opened:'26/10', who:'—', status:'recebido' },
    { id:105, title:'Trocar filtro da piscina', prop:'p3', prio:'normal', opened:'25/10', who:'Matheus', status:'andamento' },
    { id:106, title:'Pintura da varanda', prop:'p8', prio:'baixa', opened:'18/10', who:'Jessica', status:'autorizacao' },
    { id:107, title:'Geladeira fazendo barulho', prop:'p9', prio:'urgente', opened:'27/10', who:'—', status:'recebido' },
    { id:108, title:'Lâmpada queimada na varanda', prop:'p1', prio:'baixa', opened:'16/10', who:'Matheus', status:'resolvido' },
    { id:109, title:'Trocar fechadura da porta de serviço', prop:'p2', prio:'normal', opened:'07/10', who:'Matheus', status:'resolvido' },
    { id:110, title:'Instalar suporte de TV', prop:'p16', prio:'baixa', opened:'10/10', who:'Matheus', status:'resolvido' }
  ];
  const inspections = [
    { date:'26/10 seg', prop:'p8', who:'Jessica', photos:22, result:'ok' },
    { date:'26/10 seg', prop:'p12', who:'Jessica', photos:19, result:'attn' },
    { date:'27/10 ter', prop:'p5', who:'Matheus', photos:0, result:'andamento' },
    { date:'27/10 ter', prop:'p4', who:'Matheus', photos:0, result:'agendada' },
    { date:'28/10 qua', prop:'p11', who:'Matheus', photos:0, result:'agendada' },
    { date:'28/10 qua', prop:'p6', who:'Jessica', photos:0, result:'agendada' },
    { date:'29/10 qui', prop:'p3', who:'Matheus', photos:0, result:'agendada' },
    { date:'30/10 sex', prop:'p16', who:'Jessica', photos:0, result:'agendada' },
    { date:'30/10 sex', prop:'p13', who:'Matheus', photos:0, result:'agendada' },
    { date:'19/10 seg', prop:'p9', who:'Matheus', photos:0, result:'atrasada' }
  ];
  const leads = [
    { name:'Roberto Nunes', src:'Facebook Ads', city:'Orlando', plan:'Premium', when:'27/10', stage:'novo' },
    { name:'Luciana Martins', src:'Instagram', city:'Miami', plan:'VIP', when:'26/10', stage:'novo' },
    { name:'Thiago Barros', src:'Indicação', city:'Kissimmee', plan:'Premium', when:'25/10', stage:'avaliacao' },
    { name:'Jennifer Lopez Ruiz', src:'Site', city:'Miami', plan:'Essential Care', when:'24/10', stage:'proposta' },
    { name:'Felipe Araújo', src:'Facebook Ads', city:'Orlando', plan:'Premium', when:'22/10', stage:'proposta' },
    { name:'Renata Gomes', src:'Indicação', city:'Orlando', plan:'VIP', when:'20/10', stage:'avaliacao' },
    { name:'Eduardo Pires', src:'Facebook Ads', city:'Miami', plan:'Premium', when:'18/10', stage:'perdido' }
  ];
  const funnel = [ ['Pedidos de avaliação', 24], ['Avaliações feitas', 15], ['Propostas enviadas', 11], ['Contratos fechados', 6] ];
  const sources = [ ['Facebook Ads', 11], ['Indicação', 6], ['Instagram', 4], ['Site', 3] ];
  const referrals = [
    { who:'Ana Souza', ref:'Gustavo Ribeiro', status:'pagar', note:'Contrato anual assinado em 09/2026' },
    { who:'Ricardo Alves', ref:'Thiago Barros', status:'aguardando', note:'Avaliação marcada' },
    { who:'Marcos Teixeira', ref:'Renata Gomes', status:'aguardando', note:'Avaliação marcada' },
    { who:'Carlos Mendes', ref:'Camila Duarte', status:'pago', note:'Pago em 08/2026' }
  ];
  const team = [
    { name:'Jessica Freitas', role:'Administradora · fundadora', visits:21, access:'Administrador' },
    { name:'Matheus Freitas', role:'Operações · campo', visits:38, access:'Administrador' }
  ];
  const today = [
    { time:'09:00', who:'Matheus', what:'Inspeção quinzenal', prop:'p5', status:'andamento' },
    { time:'11:00', who:'Matheus', what:'Acompanhar encanador', prop:'p1', status:'agendada' },
    { time:'14:00', who:'Matheus', what:'Limpeza de virada', prop:'p3', status:'agendada' },
    { time:'15:30', who:'Jessica', what:'Avaliação de novo cliente', prop:null, place:'Thiago Barros · Kissimmee', status:'agendada' },
    { time:'16:30', who:'Matheus', what:'Inspeção mensal', prop:'p4', status:'agendada' }
  ];
  const convs = [
    { id:1, client:'Ana Souza', topic:'Dúvida sobre fatura', unread:true, open:true, msgs:[ { me:false, t:'Oi! A fatura de novembro veio com os dois imóveis juntos?', when:'09:40' } ] },
    { id:2, client:'Mark Thompson', topic:'Acesso ao app', unread:true, open:true, msgs:[ { me:false, t:'Hi, I can’t find the inspection photos from last week.', when:'08:15' } ] },
    { id:3, client:'Patrícia Rocha', topic:'Mudar de plano', unread:false, open:true, msgs:[ { me:false, t:'Quero passar a Villa para o VIP a partir de dezembro.', when:'Ontem' }, { me:true, t:'Perfeito, Patrícia! Já preparo a mudança e te aviso.', when:'Ontem' } ] },
    { id:4, client:'Daniel Moreira', topic:'Fechadura eletrônica', unread:false, open:false, msgs:[ { me:false, t:'Hóspedes não conseguem entrar.', when:'26/10' }, { me:true, t:'Abrimos o chamado e o Matheus vai até lá hoje.', when:'26/10' } ] }
  ];
  const invoices = [];
  clients.forEach((c) => {
    const total = props.filter((p) => p.client === c.id).reduce((s,p) => s + PLANS[p.plan].price, 0);
    if (c.since !== '10/2026') invoices.push({ client:c.id, ref:'Planos · outubro', due:'01/10', value:total, status: c.pay === 'late' ? 'late' : 'paid' });
    invoices.push({ client:c.id, ref:'Planos · novembro', due:'01/11', value:total, status:'open' });
  });
  invoices.push({ client:1, ref:'Reparo · lâmpada da varanda', due:'25/10', value:85, status:'paid' });
  invoices.push({ client:4, ref:'Reparo · pintura do muro', due:'05/11', value:640, status:'open' });
  return { PLANS, clients, props, tickets, inspections, leads, funnel, sources, referrals, team, today, convs, invoices };
})();
