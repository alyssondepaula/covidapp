import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


import en from './translations/en_Us.json' // importa o objeto de traduções para o idioma inglês
import pt from './translations/pt_Br.json' // importa o objeto de traduções para o idioma português



const normalizeTranslate = {
    'en_US': 'en_US',
    'pt_BR': 'pt_BR',
    'en': 'en_US',
    'pt_US': 'pt_BR',
}

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    'en-US': en,
    'pt-BR': pt,
};



const language = Localization.locale;

i18n.locale = Localization.locale;
i18n.fallbacks = true;


export const translate = key => i18n.t(key)
