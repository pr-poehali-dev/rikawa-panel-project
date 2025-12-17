import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [gradientText, setGradientText] = useState('');
  const [generatedGradient, setGeneratedGradient] = useState('');

  const services = [
    {
      icon: 'Code2',
      title: 'Разработка плагинов',
      description: 'Создаём уникальные механики для вашего сервера. От простых команд до сложных игровых систем.',
      features: ['Кастомные механики', 'Оптимизация производительности', 'Интеграция с другими плагинами']
    },
    {
      icon: 'Globe',
      title: 'Веб-разработка',
      description: 'Сайты для серверов, панели управления, системы донатов и личные кабинеты игроков.',
      features: ['Адаптивный дизайн', 'Интеграция с сервером', 'Система авторизации']
    },
    {
      icon: 'Wand2',
      title: 'Генераторы контента',
      description: 'Инструменты для упрощения работы: генераторы команд, градиентов, конфигов.',
      features: ['Команды Minecraft', 'Цветовые градиенты', 'Конфиг-файлы']
    },
    {
      icon: 'Palette',
      title: 'Дизайн сообществ',
      description: 'Оформление Discord-серверов, создание логотипов, баннеров и визуального стиля проекта.',
      features: ['Брендинг проекта', 'Discord оформление', 'Игровые текстуры']
    }
  ];

  const mockOrders = [
    { id: 1, title: 'Плагин экономики', status: 'В разработке', progress: 65, deadline: '15 января 2025' },
    { id: 2, title: 'Сайт для сервера', status: 'Тестирование', progress: 90, deadline: '20 декабря 2024' },
    { id: 3, title: 'Discord бот', status: 'Завершён', progress: 100, deadline: '10 декабря 2024' }
  ];

  const generateGradient = () => {
    if (!gradientText) return;
    const colors = ['#8B5CF6', '#D946EF', '#10B981', '#0EA5E9'];
    const chars = gradientText.split('');
    let result = '';
    
    chars.forEach((char, i) => {
      const colorIndex = Math.floor((i / chars.length) * colors.length);
      result += `<gradient:${colors[colorIndex]}>${char}`;
    });
    
    setGeneratedGradient(result);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-foreground">
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center box-glow">
              <Icon name="Terminal" className="text-primary" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-primary text-glow">RikawaStudio</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#generators" className="text-muted-foreground hover:text-primary transition-colors">Генераторы</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="User" size={16} className="mr-2" />
                {isLoggedIn ? 'Личный кабинет' : 'Войти'}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-2xl">Вход в систему</DialogTitle>
                <DialogDescription>Получите доступ к панели управления заказами</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="admin@rikawastudio.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" className="mt-2" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setIsLoggedIn(true)}>
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти в систему
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-1">
            <Icon name="Sparkles" size={14} className="mr-2" />
            Цифровая студия для Minecraft
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Создаём системы,<br />
            <span className="text-primary">не шаблоны</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Превращаем идеи владельцев серверов в рабочие механизмы. 
            Плагины, сайты, генераторы — всё как единая система.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 box-glow">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Icon name="FileCode" size={20} className="mr-2" />
              Посмотреть генераторы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Возможности студии</h3>
            <p className="text-muted-foreground text-lg">Каждое направление — это часть единого механизма</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:box-glow group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-[#10B981]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="generators" className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Генераторы</h3>
            <p className="text-muted-foreground text-lg">Практические инструменты для администраторов</p>
          </div>
          
          <Card className="bg-card/80 border-primary/20 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wand2" className="text-primary" />
                Генератор градиентов для Minecraft
              </CardTitle>
              <CardDescription>Создавайте красивые градиентные тексты для табличек, книг и чата</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="gradient-text">Введите текст</Label>
                  <Input 
                    id="gradient-text" 
                    placeholder="RikawaStudio" 
                    className="mt-2 font-mono"
                    value={gradientText}
                    onChange={(e) => setGradientText(e.target.value)}
                  />
                </div>
                
                <Button onClick={generateGradient} className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Сгенерировать градиент
                </Button>
                
                {generatedGradient && (
                  <div className="p-4 bg-secondary rounded-lg border border-primary/20">
                    <Label className="text-xs text-muted-foreground mb-2 block">Результат:</Label>
                    <code className="text-sm text-[#10B981] font-mono break-all">{generatedGradient}</code>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {isLoggedIn && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Личный кабинет</h3>
              <p className="text-muted-foreground text-lg">Управление заказами и проектами</p>
            </div>
            
            <Tabs defaultValue="orders" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="orders">
                  <Icon name="Package" size={16} className="mr-2" />
                  Заказы
                </TabsTrigger>
                <TabsTrigger value="history">
                  <Icon name="History" size={16} className="mr-2" />
                  История
                </TabsTrigger>
                <TabsTrigger value="profile">
                  <Icon name="User" size={16} className="mr-2" />
                  Профиль
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders" className="space-y-4 mt-6">
                {mockOrders.map((order) => (
                  <Card key={order.id} className="bg-card/50 border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{order.title}</CardTitle>
                          <CardDescription className="mt-2 flex items-center gap-4">
                            <Badge variant={order.status === 'Завершён' ? 'default' : 'secondary'}>
                              {order.status}
                            </Badge>
                            <span className="text-sm flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {order.deadline}
                            </span>
                          </CardDescription>
                        </div>
                        <span className="text-2xl font-bold text-primary">{order.progress}%</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="history">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <Icon name="Archive" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>История проектов появится здесь</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <Icon name="Settings" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Настройки профиля</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      <footer className="py-12 border-t border-primary/20 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Terminal" className="text-primary" size={18} />
              </div>
              <span className="font-bold text-primary">RikawaStudio</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 RikawaStudio. Создаём игровые миры.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
