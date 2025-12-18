import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Stats = () => {
  const stats = [
    { icon: 'CheckCircle2', value: '4', label: 'Выполненных заказов', color: 'text-[#10B981]' },
    { icon: 'Zap', value: '2', label: 'Проектов в разработке', color: 'text-yellow-500' },
    { icon: 'Users', value: '6', label: 'Довольных клиентов', color: 'text-primary' },
    { icon: 'Clock', value: '~14 дней', label: 'Средний срок разработки', color: 'text-blue-500' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <Badge className="mb-6 bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 px-4 py-1">
            <Icon name="Activity" size={14} className="mr-2" />
            Студия активна
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Статистика студии</h3>
          <p className="text-muted-foreground text-lg">Цифры, подтверждающие наш опыт</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:box-glow transition-all text-center">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <Icon name={stat.icon as any} size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 minecraft-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;