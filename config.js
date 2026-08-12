/* ============================================================
   BlinPlay — configuração compartilhada
   B4 — SB_URL e SB_KEY estavam duplicados em index.html e player.html.
   Na próxima rotação de chave, os dois iam divergir e alguém só descobriria
   quando um dos lados parasse de conectar. Fonte única resolve.
   Carregado por ambos e mantido no cache do Service Worker para o boot
   offline do player.
   ============================================================ */
const SB_URL = 'https://wjyaxmbkdjebulosdtds.supabase.co';
const SB_KEY = 'sb_publishable_mmTZZoQCGe24bTshASUi1w_JKnyU4sv';
