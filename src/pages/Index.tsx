
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
  Award
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Хедер */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gem className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold">МайнДонат</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-white">Главная</Button>
          <Button variant="ghost" className="text-white">Донат-пакеты</Button>
          <Button variant="ghost" className="text-white">О сервере</Button>
          <Button variant="ghost" className="text-white">FAQ</Button>
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700">Войти</Button>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1607634750213-c62a01cc1e1a?auto=format&fit=crop&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Поддержи свой любимый сервер</h1>
          <p className="text-xl mb-8 max-w-2xl">Получи особые возможности и привилегии в игре, выделись среди других игроков с нашими донат-пакетами</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
            Выбрать донат <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Категории донатов */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Категории донатов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              icon={<Shield className="h-10 w-10 text-blue-400" />}
              title="Привилегии"
              description="Особые права и возможности на сервере"
            />
            <CategoryCard 
              icon={<Sword className="h-10 w-10 text-red-400" />}
              title="Оружие и броня"
              description="Уникальное снаряжение с особыми свойствами"
            />
            <CategoryCard 
              icon={<Gem className="h-10 w-10 text-purple-400" />}
              title="Ресурсы и предметы"
              description="Редкие ресурсы и предметы для крафта"
            />
            <CategoryCard 
              icon={<Crown className="h-10 w-10 text-yellow-400" />}
              title="VIP пакеты"
              description="Комплексные наборы с максимальными возможностями"
            />
          </div>
        </div>
      </section>

      {/* Популярные донаты */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Популярные донат-пакеты</h2>
          
          <Tabs defaultValue="privileges" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="privileges">Привилегии</TabsTrigger>
              <TabsTrigger value="items">Предметы</TabsTrigger>
              <TabsTrigger value="cosmetics">Косметика</TabsTrigger>
              <TabsTrigger value="special">Специальные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="privileges" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DonateCard 
                title="VIP"
                price="199₽"
                features={[
                  "Префикс [VIP] в чате",
                  "Доступ к команде /fly",
                  "Набор стартовых ресурсов",
                  "3 точки телепортации"
                ]}
                popular={false}
              />
              <DonateCard 
                title="PREMIUM"
                price="499₽"
                features={[
                  "Все возможности VIP",
                  "Префикс [PREMIUM] в чате",
                  "Доступ к команде /god",
                  "Кейс с редкими предметами",
                  "5 точек телепортации"
                ]}
                popular={true}
              />
              <DonateCard 
                title="LEGEND"
                price="999₽"
                features={[
                  "Все возможности PREMIUM",
                  "Префикс [LEGEND] в чате",
                  "Полный доступ ко всем командам",
                  "Эксклюзивные предметы",
                  "Безлимитные точки телепортации"
                ]}
                popular={false}
              />
            </TabsContent>
            
            <TabsContent value="items" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Другие категории... */}
              <DonateCard 
                title="Набор алмазов"
                price="99₽"
                features={[
                  "64 алмаза",
                  "32 изумруда",
                  "16 незерита"
                ]}
                popular={false}
              />
              <DonateCard 
                title="Боевой комплект"
                price="349₽"
                features={[
                  "Алмазная броня с зачарованиями",
                  "Зачарованный меч",
                  "Лук с бесконечностью",
                  "Зелья силы и регенерации"
                ]}
                popular={true}
              />
              <DonateCard 
                title="Строительный набор"
                price="249₽"
                features={[
                  "1000 блоков на выбор",
                  "Инструменты с Эффективностью V",
                  "Декоративные блоки",
                  "Растения и рассада"
                ]}
                popular={false}
              />
            </TabsContent>
            
            <TabsContent value="cosmetics">
              {/* Содержимое для косметики */}
            </TabsContent>
            
            <TabsContent value="special">
              {/* Содержимое для специальных предложений */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock className="h-12 w-12 text-purple-400" />}
              title="Мгновенная выдача"
              description="Ваши привилегии и предметы будут выданы сразу после оплаты"
            />
            <FeatureCard 
              icon={<Shield className="h-12 w-12 text-purple-400" />}
              title="Безопасная оплата"
              description="Используем защищенные способы оплаты через проверенные сервисы"
            />
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-purple-400" />}
              title="Поддержка 24/7"
              description="Наша команда поддержки всегда готова помочь с любыми вопросами"
            />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Gem className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">МайнДонат</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">Правила</a>
              <a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white">Контакты</a>
              <a href="#" className="text-gray-400 hover:text-white">Поддержка</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2025 МайнДонат. Все права защищены. Minecraft является товарным знаком Mojang AB.
          </div>
        </div>
      </footer>
    </div>
  );
};

const CategoryCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-gray-700 rounded-lg">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
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
    <Card className={`relative ${popular ? 'border-purple-500' : 'border-gray-700'} hover:border-purple-500 transition-all duration-300`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-sm font-bold">
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
              <Award className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button className={`w-full ${popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
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
