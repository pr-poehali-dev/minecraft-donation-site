
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, 
  Gem, 
  Shield, 
  Sword, 
  ChevronRight, 
  Users, 
  Clock, 
  Award,
  Sparkles
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Хедер */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-amber-400" />
          <span className="text-2xl font-bold">LegenDex</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-white">Главная</Button>
          <Button variant="ghost" className="text-white">Привилегии</Button>
          <Button variant="ghost" className="text-white">О сервере</Button>
          <Button variant="ghost" className="text-white">FAQ</Button>
          <Button variant="default" className="bg-amber-600 hover:bg-amber-700">Войти</Button>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1607634969261-864bb59daa23?auto=format&fit=crop&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Стань легендой с LegenDex</h1>
          <p className="text-xl mb-8 max-w-2xl">Открой новые возможности, получи уникальные привилегии и преимущества на нашем сервере</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
            Выбрать привилегию <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Категории донатов */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Категории привилегий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard 
              icon={<Crown className="h-10 w-10 text-amber-400" />}
              title="Статусы"
              description="Получи особый статус и выделись среди игроков"
            />
            <CategoryCard 
              icon={<Sword className="h-10 w-10 text-amber-400" />}
              title="Боевые наборы"
              description="Мощное снаряжение для эпических сражений"
            />
            <CategoryCard 
              icon={<Gem className="h-10 w-10 text-amber-400" />}
              title="Редкие ресурсы"
              description="Эксклюзивные ресурсы для строительства и крафта"
            />
          </div>
        </div>
      </section>

      {/* Популярные донаты */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Популярные привилегии</h2>
          
          <Tabs defaultValue="ranks" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ranks">Статусы</TabsTrigger>
              <TabsTrigger value="kits">Наборы</TabsTrigger>
              <TabsTrigger value="special">Специальные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ranks" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DonateCard 
                title="EXPLORER"
                price="199₽"
                features={[
                  "Уникальный префикс",
                  "Доступ к /fly в спавне",
                  "3 дома телепортации",
                  "Возможность менять время"
                ]}
                popular={false}
              />
              <DonateCard 
                title="LEGEND"
                price="499₽"
                features={[
                  "Все возможности EXPLORER",
                  "Доступ к /fly везде",
                  "5 домов телепортации",
                  "Защита от PvP",
                  "Эксклюзивные командные блоки"
                ]}
                popular={true}
              />
              <DonateCard 
                title="IMMORTAL"
                price="999₽"
                features={[
                  "Все возможности LEGEND",
                  "Режим бессмертия",
                  "Неограниченные дома",
                  "Эксклюзивный питомец",
                  "Личный остров в пустоте"
                ]}
                popular={false}
              />
            </TabsContent>
            
            <TabsContent value="kits" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DonateCard 
                title="PVP Боец"
                price="149₽"
                features={[
                  "Алмазная броня",
                  "Зачарованный меч",
                  "Зелья силы и регенерации",
                  "Золотые яблоки"
                ]}
                popular={false}
              />
              <DonateCard 
                title="Шахтёр Элита"
                price="249₽"
                features={[
                  "Кирка Эффективность V",
                  "Зелье ночного видения",
                  "64 факела",
                  "Шахтёрский шлем с дыханием"
                ]}
                popular={true}
              />
              <DonateCard 
                title="Строитель Про"
                price="199₽"
                features={[
                  "1000 блоков на выбор",
                  "Инструменты с Шёлковым касанием",
                  "Декоративные блоки",
                  "Эксклюзивные текстуры"
                ]}
                popular={false}
              />
            </TabsContent>
            
            <TabsContent value="special" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DonateCard 
                title="Питомец Дракон"
                price="349₽"
                features={[
                  "Ручной мини-дракон",
                  "Летает вместе с владельцем",
                  "Защищает в бою",
                  "Уникальная анимация"
                ]}
                popular={false}
              />
              <DonateCard 
                title="Частный остров"
                price="599₽"
                features={[
                  "Личный остров 100x100",
                  "Полный контроль доступа",
                  "Телепорт на остров",
                  "Выбор биома",
                  "Защита от гриферов"
                ]}
                popular={true}
              />
              <DonateCard 
                title="Магические способности"
                price="449₽"
                features={[
                  "Телекинез предметов",
                  "Призыв молнии",
                  "Контроль погоды",
                  "Невидимость на 5 минут (кулдаун)"
                ]}
                popular={false}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Почему LegenDex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock className="h-12 w-12 text-amber-400" />}
              title="Мгновенная активация"
              description="Получите свои привилегии сразу после оплаты без ожидания"
            />
            <FeatureCard 
              icon={<Shield className="h-12 w-12 text-amber-400" />}
              title="Безопасные платежи"
              description="Мы используем только проверенные и защищенные способы оплаты"
            />
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-amber-400" />}
              title="Дружелюбное сообщество"
              description="Присоединяйтесь к тысячам игроков на нашем сервере"
            />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">LegenDex</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">Правила</a>
              <a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white">Контакты</a>
              <a href="#" className="text-gray-400 hover:text-white">Поддержка</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2025 LegenDex. Все права защищены. Minecraft является товарным знаком Mojang AB.
          </div>
        </div>
      </footer>
    </div>
  );
};

const CategoryCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-amber-500 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-gray-700 rounded-lg">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

const DonateCard = ({ title, price, features, popular }: { 
  title: string, 
  price: string, 
  features: string[],
  popular: boolean
}) => {
  return (
    <Card className={`relative ${popular ? 'border-amber-500' : 'border-gray-700'} hover:border-amber-500 transition-all duration-300`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 px-4 py-1 rounded-full text-sm font-bold">
          Популярный
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-3xl font-bold text-white mt-2">{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Award className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button className={`w-full ${popular ? 'bg-amber-600 hover:bg-amber-700' : ''}`}>
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Index;
