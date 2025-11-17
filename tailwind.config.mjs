/** @type {import('tailwindcss').Config} */
const config = {
    content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // ===== COLORES INSTITUCIONALES BASE =====
        // Verde LC Energia (Principal)
        primary: {
          50: '#f2f8e6',
          100: '#e5f0cd',
          200: '#d0e3a6',
          300: '#bad67f',
          400: '#a4c958',
          500: '#9BBD2D', // ← COLOR INSTITUCIONAL BASE (Verde LC Energia)
          600: '#8ca928',
          700: '#7c9523',
          800: '#6d811e',
          900: '#5e6d19',
        },

        // Naranja LC Energia (Secundario/CTA)
        secondary: {
          50: '#fff9e6',
          100: '#fff0cd',
          200: '#ffe3a6',
          300: '#ffd67f',
          400: '#ffc958',
          500: '#F49918', // ← COLOR INSTITUCIONAL BASE (Naranja LC Energia)
          600: '#db8a15',
          700: '#c27a12',
          800: '#a86b0f',
          900: '#8f5c0c',
        },

        // ===== COLORES COMPLEMENTARIOS (Psicología del Color) =====

        // Azul Tecnológico - Confianza, Innovación, Tecnología Limpia
        tech: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Azul vibrante para elementos tecnológicos
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },

        // Amarillo Solar - Energía Solar, Optimismo, Luz
        solar: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Amarillo brillante para elementos solares
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },

        // Verde Éxito/Sostenibilidad - Impacto Positivo, Certificaciones
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Verde vibrante para badges de éxito
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },

        // ===== COLORES DE SOPORTE =====

        // Accent (mantener compatibilidad)
        accent: {
          50: '#fff9e6',
          100: '#fff0cd',
          200: '#ffe3a6',
          300: '#ffd67f',
          400: '#ffc958',
          500: '#F49918', // Alias del naranja institucional
          600: '#db8a15',
          700: '#c27a12',
          800: '#a86b0f',
          900: '#8f5c0c',
        },

        // Neutros mejorados
        neutral: {
          50: '#fcfcfc',
          100: '#f7f7f7',
          200: '#eeeeee',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // Utilidades
        muted: '#737373',
        white: '#ffffff',

        // Dark mode
        dark: {
          50: '#525252',
          100: '#404040',
          200: '#262626',
          300: '#171717',
          400: '#0a0a0a',
          500: '#070a0d',
        }
      },
      backgroundImage: {
        // Gradientes con colores institucionales
        'gradient-primary': 'linear-gradient(135deg, #9BBD2D 0%, #7c9523 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F49918 0%, #c27a12 100%)',
        'gradient-combined': 'linear-gradient(135deg, #9BBD2D 0%, #F49918 100%)',

        // Gradiente hero mejorado (naranja a verde institucional)
        'gradient-hero': 'linear-gradient(135deg, rgba(244, 153, 24, 0.95) 0%, rgba(244, 153, 24, 0.7) 50%, rgba(155, 189, 45, 0.85) 100%)',

        // Gradientes con nuevos colores complementarios
        'gradient-tech': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-solar': 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
        'gradient-success': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',

        // Gradientes combinados para efectos especiales
        'gradient-energy': 'linear-gradient(135deg, #eab308 0%, #F49918 50%, #9BBD2D 100%)', // Solar → Naranja → Verde
        'gradient-innovation': 'linear-gradient(135deg, #3b82f6 0%, #9BBD2D 100%)', // Azul tech → Verde
      },
      borderRadius: {
        'xl': '1rem', // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px - Para elementos destacados
      },
      boxShadow: {
        // Sombras con colores institucionales
        'primary': '0 10px 30px rgba(155, 189, 45, 0.15)',
        'primary-hover': '0 15px 40px rgba(155, 189, 45, 0.25)',
        'secondary': '0 10px 30px rgba(244, 153, 24, 0.15)',
        'secondary-hover': '0 15px 40px rgba(244, 153, 24, 0.25)',

        // Sombras con colores complementarios
        'tech': '0 10px 30px rgba(59, 130, 246, 0.15)',
        'solar': '0 10px 30px rgba(234, 179, 8, 0.15)',
        'success': '0 10px 30px rgba(34, 197, 94, 0.15)',

        // Sombras neutrales
        'card': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'xl': '0 20px 50px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        'section': '120px',
        'container': '80px',
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.6s ease-out',
      'slide-up': 'slideUp 0.6s ease-out',
      'bounce-gentle': 'bounceGentle 2s infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      slideUp: {
        '0%': { opacity: '0', transform: 'translateY(30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      bounceGentle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }
      }
    }
  },
  plugins: [],
};

export default config;