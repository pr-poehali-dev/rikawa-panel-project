import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [gradientText, setGradientText] = useState('');
  const [generatedGradient, setGeneratedGradient] = useState('');
  
  const [commandType, setCommandType] = useState('give');
  const [itemName, setItemName] = useState('diamond');
  const [itemAmount, setItemAmount] = useState('1');
  const [playerName, setPlayerName] = useState('@p');
  const [generatedCommand, setGeneratedCommand] = useState('');
  
  const [configName, setConfigName] = useState('');
  const [configValue, setConfigValue] = useState('');
  const [configEntries, setConfigEntries] = useState<Array<{key: string, value: string}>>([]);
  const [generatedConfig, setGeneratedConfig] = useState('');
  
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');

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
  
  const generateCommand = () => {
    let cmd = '';
    switch(commandType) {
      case 'give':
        cmd = `/give ${playerName} minecraft:${itemName} ${itemAmount}`;
        break;
      case 'tp':
        cmd = `/tp ${playerName} ~ ~ ~`;
        break;
      case 'summon':
        cmd = `/summon minecraft:${itemName} ~ ~ ~`;
        break;
      case 'effect':
        cmd = `/effect give ${playerName} minecraft:${itemName} 60 1`;
        break;
    }
    setGeneratedCommand(cmd);
  };
  
  const addConfigEntry = () => {
    if (!configName || !configValue) return;
    setConfigEntries([...configEntries, { key: configName, value: configValue }]);
    setConfigName('');
    setConfigValue('');
  };
  
  const generateConfig = () => {
    let yaml = '# Конфигурация плагина\n\n';
    configEntries.forEach(entry => {
      yaml += `${entry.key}: ${entry.value}\n`;
    });
    setGeneratedConfig(yaml);
  };
  
  const portfolioProjects = [
    {
      title: 'Система кланов для RPG сервера',
      category: 'Плагин',
      description: 'Полноценная система кланов с войнами, территориями и экономикой',
      tech: ['Java', 'MySQL', 'Spigot API'],
      image: '🏰'
    },
    {
      title: 'Донат-магазин с личным кабинетом',
      category: 'Веб-сайт',
      description: 'Современный веб-сайт с интеграцией платёжных систем и статистикой игроков',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: '💎'
    },
    {
      title: 'Discord бот для модерации',
      category: 'Бот',
      description: 'Автоматизация модерации, логирование событий, система предупреждений',
      tech: ['Python', 'Discord.py', 'SQLite'],
      image: '🤖'
    },
    {
      title: 'Генератор данжей',
      category: 'Плагин',
      description: 'Процедурная генерация подземелий с уникальными боссами и наградами',
      tech: ['Java', 'WorldEdit API', 'Custom AI'],
      image: '⚔️'
    }
  ];

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
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#generators" className="text-muted-foreground hover:text-primary transition-colors">Генераторы</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Заявка</a>
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

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Портфолио</h3>
            <p className="text-muted-foreground text-lg">Примеры наших работ для Minecraft-проектов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:box-glow group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{project.image}</div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
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
          
          <Tabs defaultValue="gradient" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gradient">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Градиенты
              </TabsTrigger>
              <TabsTrigger value="commands">
                <Icon name="Terminal" size={16} className="mr-2" />
                Команды
              </TabsTrigger>
              <TabsTrigger value="config">
                <Icon name="FileCode" size={16} className="mr-2" />
                Конфиги
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="gradient" className="mt-6">
              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle>Генератор градиентов</CardTitle>
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
            </TabsContent>
            
            <TabsContent value="commands" className="mt-6">
              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle>Генератор команд Minecraft</CardTitle>
                  <CardDescription>Быстрое создание команд для плагинов и датапаков</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="command-type">Тип команды</Label>
                      <Select value={commandType} onValueChange={setCommandType}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="give">Give (Выдать предмет)</SelectItem>
                          <SelectItem value="tp">Teleport (Телепорт)</SelectItem>
                          <SelectItem value="summon">Summon (Призвать моба)</SelectItem>
                          <SelectItem value="effect">Effect (Эффект)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="player-name">Игрок</Label>
                        <Input 
                          id="player-name" 
                          placeholder="@p" 
                          className="mt-2 font-mono"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="item-name">Предмет/Моб</Label>
                        <Input 
                          id="item-name" 
                          placeholder="diamond" 
                          className="mt-2 font-mono"
                          value={itemName}
                          onChange={(e) => setItemName(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    {commandType === 'give' && (
                      <div>
                        <Label htmlFor="item-amount">Количество</Label>
                        <Input 
                          id="item-amount" 
                          placeholder="1" 
                          className="mt-2 font-mono"
                          value={itemAmount}
                          onChange={(e) => setItemAmount(e.target.value)}
                        />
                      </div>
                    )}
                    
                    <Button onClick={generateCommand} className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Terminal" size={16} className="mr-2" />
                      Сгенерировать команду
                    </Button>
                    
                    {generatedCommand && (
                      <div className="p-4 bg-secondary rounded-lg border border-primary/20">
                        <Label className="text-xs text-muted-foreground mb-2 block">Результат:</Label>
                        <code className="text-sm text-[#10B981] font-mono break-all">{generatedCommand}</code>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="config" className="mt-6">
              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle>Генератор конфигов (YAML)</CardTitle>
                  <CardDescription>Создание конфигурационных файлов для плагинов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="config-name">Ключ</Label>
                        <Input 
                          id="config-name" 
                          placeholder="max-players" 
                          className="mt-2 font-mono"
                          value={configName}
                          onChange={(e) => setConfigName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="config-value">Значение</Label>
                        <Input 
                          id="config-value" 
                          placeholder="100" 
                          className="mt-2 font-mono"
                          value={configValue}
                          onChange={(e) => setConfigValue(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <Button onClick={addConfigEntry} variant="outline" className="w-full border-primary/50">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить параметр
                    </Button>
                    
                    {configEntries.length > 0 && (
                      <div className="p-4 bg-secondary/50 rounded-lg border border-primary/20">
                        <Label className="text-xs text-muted-foreground mb-2 block">Добавленные параметры:</Label>
                        <div className="space-y-1">
                          {configEntries.map((entry, i) => (
                            <div key={i} className="text-sm font-mono">
                              <span className="text-primary">{entry.key}</span>: {entry.value}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <Button onClick={generateConfig} className="w-full bg-primary hover:bg-primary/90" disabled={configEntries.length === 0}>
                      <Icon name="FileCode" size={16} className="mr-2" />
                      Сгенерировать конфиг
                    </Button>
                    
                    {generatedConfig && (
                      <div className="p-4 bg-secondary rounded-lg border border-primary/20">
                        <Label className="text-xs text-muted-foreground mb-2 block">Результат (config.yml):</Label>
                        <pre className="text-sm text-[#10B981] font-mono whitespace-pre-wrap">{generatedConfig}</pre>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Начать проект</h3>
            <p className="text-muted-foreground text-lg">Отправьте заявку, и мы свяжемся с вами в течение 24 часов</p>
          </div>
          
          <Card className="bg-card/80 border-primary/20 max-w-2xl mx-auto box-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Rocket" className="text-primary" />
                Форма заявки
              </CardTitle>
              <CardDescription>Расскажите о вашем проекте</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="project-name">Название проекта</Label>
                  <Input 
                    id="project-name" 
                    placeholder="Мой сервер" 
                    className="mt-2"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="project-type">Тип заказа</Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plugin">Разработка плагина</SelectItem>
                      <SelectItem value="website">Веб-сайт</SelectItem>
                      <SelectItem value="bot">Discord бот</SelectItem>
                      <SelectItem value="design">Дизайн</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="project-description">Описание проекта</Label>
                  <Textarea 
                    id="project-description" 
                    placeholder="Опишите, что вам нужно создать..." 
                    className="mt-2 min-h-32"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-info">Контакты (Telegram, Discord, Email)</Label>
                  <Input 
                    id="contact-info" 
                    placeholder="@username или email" 
                    className="mt-2"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
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