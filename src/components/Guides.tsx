import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Guides = () => {
  return (
    <section id="guides" className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Гайды и знания</h3>
          <p className="text-muted-foreground text-lg">
            Как правильно заказывать услуги и избежать типовых ошибок
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="BookOpen" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-xl">Как заказать плагин</CardTitle>
              <CardDescription>Что нужно подготовить перед заказом</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Подробное описание механики и желаемых команд</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Версия сервера (Paper, Spigot, Purpur) и Minecraft</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Список плагинов для интеграции (Vault, PlaceholderAPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Примеры работы механики на других серверах (если есть)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Globe" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-xl">Как заказать сайт</CardTitle>
              <CardDescription>Данные для быстрой разработки</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Название проекта, логотип и цветовая схема</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Список страниц и их содержимое (текст, изображения)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Примеры сайтов, которые нравятся (дизайн, структура)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span>Нужна ли интеграция с платёжными системами</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-card/80 border-primary/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AlertTriangle" className="text-yellow-500" />
              Типовые ошибки владельцев серверов
            </CardTitle>
            <CardDescription>Избегайте этих ошибок при заказе и эксплуатации</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-red-500" />
                    Нечёткое описание задачи
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">
                    <strong>Плохо:</strong> "Сделайте плагин кланов как на других серверах"
                  </p>
                  <p className="text-[#10B981]">
                    <strong>Хорошо:</strong> "Плагин кланов: создание клана (/clan create), приглашение игроков (/clan invite), 
                    привязка территорий через WorldGuard, таблица лидеров в табе"
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-red-500" />
                    Игнорирование версии сервера
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Указывайте точную версию: Paper 1.20.1, а не просто "последняя". 
                  API между версиями отличается, и плагин может не работать.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-red-500" />
                    Установка плагинов без тестирования
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Всегда тестируйте новые плагины на тестовом сервере перед установкой на боевой. 
                  Проверяйте совместимость с другими плагинами.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-red-500" />
                    Отсутствие бэкапов
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Делайте резервные копии миров и базы данных перед установкой новых плагинов. 
                  Используйте автоматические бэкапы каждые 6-12 часов.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-red-500" />
                    Неоптимизированные конфиги
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Изучайте параметры конфигов плагинов. Дефолтные настройки не всегда оптимальны 
                  для вашего сервера. Отключайте неиспользуемые функции.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Guides;
