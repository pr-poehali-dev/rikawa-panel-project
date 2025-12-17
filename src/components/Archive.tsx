import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ArchiveItem {
  id: number;
  title: string;
  category: string;
  description: string;
  downloads: number;
  type: string;
}

const archiveItems: ArchiveItem[] = [
  {
    id: 1,
    title: 'Базовый конфиг экономики',
    category: 'Конфиг',
    description: 'Готовый config.yml для плагина экономики с балансировкой цен и стартовым капиталом',
    downloads: 247,
    type: 'yaml'
  },
  {
    id: 2,
    title: 'Команды для кастомных предметов',
    category: 'Команды',
    description: 'Набор команд /give для создания уникальных предметов с NBT-тегами и зачарованиями',
    downloads: 189,
    type: 'txt'
  },
  {
    id: 3,
    title: 'Демо-плагин HelloWorld',
    category: 'Плагин',
    description: 'Простой плагин-пример для изучения Spigot API. Включает команды и события',
    downloads: 412,
    type: 'jar'
  },
  {
    id: 4,
    title: 'Структура БД для кланов',
    category: 'База данных',
    description: 'SQL-схема для хранения данных кланов: участники, территории, статистика',
    downloads: 156,
    type: 'sql'
  },
  {
    id: 5,
    title: 'Шаблоны GUI меню',
    category: 'Конфиг',
    description: 'Готовые конфигурации красивых GUI-меню с иконками и описаниями',
    downloads: 321,
    type: 'yaml'
  },
  {
    id: 6,
    title: 'Сниппеты Kotlin для плагинов',
    category: 'Код',
    description: 'Полезные сниппеты на Kotlin: работа с инвентарём, БД, конфигами',
    downloads: 93,
    type: 'kt'
  }
];

const Archive = () => {
  const getIconByType = (type: string) => {
    switch(type) {
      case 'yaml': return 'FileCode';
      case 'txt': return 'FileText';
      case 'jar': return 'Package';
      case 'sql': return 'Database';
      case 'kt': return 'Code2';
      default: return 'File';
    }
  };

  return (
    <section id="archive" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Архив решений</h3>
          <p className="text-muted-foreground text-lg">
            Бесплатные конфиги, шаблоны, демо-плагины и сниппеты для вашего сервера
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {archiveItems.map((item) => (
            <Card key={item.id} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:box-glow group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name={getIconByType(item.type) as any} className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    .{item.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Download" size={14} />
                    <span>{item.downloads} скачиваний</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Icon name="Download" size={14} className="mr-2" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;
