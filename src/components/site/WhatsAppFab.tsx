export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5541991319654?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20Eco%20Tênis."
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 hover:bg-accent transition-colors"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M19.11 17.37c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.41-1.67-1.58-1.95-.16-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.87-2.12-.23-.55-.46-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.84 4.27.68.29 1.21.46 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.89-1.34.23-.66.23-1.23.16-1.34-.07-.12-.26-.19-.54-.33zM16.02 4C9.41 4 4.05 9.36 4.05 15.96c0 2.11.55 4.17 1.61 5.99L4 28l6.21-1.63a11.93 11.93 0 0 0 5.81 1.48h.01c6.6 0 11.97-5.36 11.97-11.97A11.86 11.86 0 0 0 24.5 7.5 11.86 11.86 0 0 0 16.02 4z" />
      </svg>
      <span className="text-[12px] tracking-[0.18em] uppercase hidden sm:inline">WhatsApp</span>
    </a>
  );
}
