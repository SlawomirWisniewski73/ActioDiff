# Filozofia ActioDiff

## Wprowadzenie: Ewolucja Poza Opis Stanu

Światy, które symulujemy i analizujemy, składają się nie tylko z obiektów, ale z **agentów** – bytów (AI, ludzi, organizacji) posiadających cele, podejmujących decyzje i wchodzących ze sobą w złożone interakcje. Dotychczasowe formaty danych, włączając w to `VectorDiff` i `SentioDiff`, doskonale radzą sobie z opisywaniem stanu i myśli pojedynczych bytów. Jednak brakuje im języka do modelowania samej **akcji, intencji i interakcji**.

**ActioDiff** jest odpowiedzią na to wyzwanie. To meta-język zaprojektowany, aby przejść od pasywnego opisu do aktywnego modelowania systemów wieloagentowych.

## Trzy Fazy Ewolucji

ActioDiff jest trzecim i najbardziej zaawansowanym etapem w ewolucji myśli o formacie danych dynamicznych:

1.  **VectorDiff (Kinematyka):** Odpowiada na pytanie *"Jak coś się zmienia?"*. Dostarcza czystej gramatyki do opisu transformacji stanu w czasie.
2.  **SentioDiff (Introspekcja):** Odpowiada na pytanie *"Czym jest i co myśli dany byt?"*. Wprowadza warstwę semantyczną i samoopisową (`selfModel`, `traces`), pozwalając na wgląd w wewnętrzny stan pojedynczego agenta.
3.  **ActioDiff (Interakcja):** Odpowiada na pytanie *"Dlaczego agenci wchodzą ze sobą w interakcję i jakie są ich cele?"*. Wprowadza warstwę motywacji, zasad i przewidywania.

## Kluczowe Koncepcje ActioDiff

ActioDiff rozszerza `SentioDiff` o trzy fundamentalne warstwy:

### 1. Warstwa Intencji (`goalModel`)

Każdy agent w `ActioDiff` jest opisany nie tylko przez to, kim jest, ale także przez to, do czego dąży. `GoalModel` to formalny zapis celów, ograniczeń i funkcji użyteczności agenta. To pozwala nam zrozumieć **motywację** stojącą za jego działaniami.

### 2. Warstwa Interakcji (`interaction`)

To serce formatu. Obiekt `interaction` definiuje "zasady gry" między agentami – czy jest to negocjacja, współpraca, czy rywalizacja. Łączy on ze sobą wielu agentów i definiuje protokół, według którego będą się komunikować. `ActioDiff` przekształca monolog (`SentioDiff`) w **dialog**.

### 3. Warstwa Predykcji (Hipotetyczne Linie Czasu)

`ActioDiff` pozwala agentom nie tylko na działanie, ale i na **planowanie**. Format przewiduje możliwość zapisu hipotetycznych, przyszłych linii czasu. Dzięki temu możemy analizować nie tylko to, jaką decyzję podjął agent, ale także jakie inne scenariusze rozważał i dlaczego je odrzucił.

## Wizja

Wizją `ActioDiff` jest stworzenie uniwersalnego formatu do zapisu, symulacji i analizy złożonych systemów adaptacyjnych. Chcemy przejść od tworzenia "kronik" opisujących przeszłość do budowania "symulatorów rzeczywistości", które pozwalają na modelowanie przyszłych interakcji i ich konsekwencji.
