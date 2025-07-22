# Specyfikacja Formatu ActioDiff (v0.1)

Niniejszy dokument opisuje strukturę i pola dokumentu `ActioDiffDocument` w formacie JSON.

## 1. Obiekt Główny: `ActioDiffDocument`

Główny obiekt zawierający całą definicję interakcji.

| Pole | Typ | Wymagane | Opis |
| :--- | :--- | :--- | :--- |
| **`version`** | `string` | Tak | Wersja formatu, np. `"1.0-actio"`. |
| **`interaction`** | `Interaction` | Tak | Obiekt definiujący "zasady gry". |
| **`agents`** | `Agent[]` | Tak | Tablica obiektów opisujących każdego uczestnika interakcji. |
| **`timeline`** | `TimelineEvent[]` | Tak | Chronologiczna lista zdarzeń, które zaszły w ramach interakcji. |

### Przykład
```json
{
  "version": "1.0-actio",
  "interaction": { ... },
  "agents": [ ... ],
  "timeline": [ ... ]
}
