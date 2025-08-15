import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, MessageCircle } from "lucide-react";

export type TractorSpec = {
  id?: number;
  model: string;
  series?: string;
  hp?: string;
  transmission?: string;
  image?: string;
  features?: string[];
  useCase?: string;
  applications?: string[];
  specifications?: Record<string, string>;
  brochureUrl?: string | null;
  officialSpecs?: Record<string, string>;
};

interface TractorDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tractor?: TractorSpec | null;
  onWhatsApp?: (tractor: TractorSpec) => void;
}

const TitleValue: React.FC<{ label: string; value?: string | number }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="grid grid-cols-2 gap-2 text-sm py-1">
      <div className="text-muted-foreground">{label}</div>
      <div className="font-medium text-foreground">{value}</div>
    </div>
  );
};

const TractorDetailsDialog: React.FC<TractorDetailsDialogProps> = ({ open, onOpenChange, tractor, onWhatsApp }) => {
  if (!tractor) return null;

  const whatsappHandler = () => {
    const message = `Hi, I'm interested in ${tractor.model} (${tractor.hp || tractor.specifications?.hp}). Please share more details and pricing.`;
    window.open(`https://wa.me/917895327351?text=${encodeURIComponent(message)}`, '_blank');
    if (onWhatsApp) onWhatsApp(tractor);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-xl md:text-2xl">
            {tractor.model}
            {tractor.hp && (
              <Badge className="ml-2 align-middle">{tractor.hp}</Badge>
            )}
          </DialogTitle>
          {tractor.series && (
            <DialogDescription className="text-sm text-muted-foreground">
              {tractor.series}
            </DialogDescription>
          )}
        </DialogHeader>

        {tractor.image && (
          <div className="aspect-video w-full bg-secondary/30 overflow-hidden">
            <img
              src={tractor.image}
              alt={`${tractor.model} detailed view`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        <ScrollArea className="max-h-[70vh]">
          <div className="px-6 py-5 space-y-6">
            {tractor.useCase && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Best For</h3>
                <p className="text-sm text-muted-foreground">{tractor.useCase}</p>
              </div>
            )}

            {tractor.features && tractor.features.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {tractor.features.map((f, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {f}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {tractor.applications && tractor.applications.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Applications</h3>
                <div className="text-sm text-muted-foreground">
                  {tractor.applications.join(", ")}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Specifications</h3>
              <div className="rounded-lg border p-4">
                <TitleValue label="Power Range" value={tractor.officialSpecs?.powerRange || tractor.hp} />
                <TitleValue label="Engine" value={tractor.specifications?.engine} />
                <TitleValue label="Displacement" value={tractor.specifications?.displacement} />
                <TitleValue label="Cylinders" value={tractor.officialSpecs?.cylinders} />
                <TitleValue label="Clutch Type" value={tractor.officialSpecs?.clutchType || tractor.specifications?.clutch} />
                <TitleValue label="Transmission" value={tractor.officialSpecs?.transmissionType || tractor.transmission} />
                <TitleValue label="PTO Speed" value={tractor.specifications?.pto} />
                <TitleValue label="Hydraulic Capacity" value={tractor.specifications?.hydraulics} />
                <TitleValue label="Fuel Tank" value={tractor.specifications?.fuelTank} />
                <TitleValue label="Max Speed" value={tractor.officialSpecs?.forwardSpeed} />
                <TitleValue label="Weight" value={tractor.officialSpecs?.totalWeight} />
                <TitleValue label="Steering" value={tractor.officialSpecs?.steeringType || tractor.specifications?.steering} />
                <TitleValue label="Brakes" value={tractor.officialSpecs?.brakeType || tractor.specifications?.brakes} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="flex-1" variant="outline" onClick={() => window.open('tel:+917895327351')}>
                <Phone className="mr-2 h-4 w-4" />
                Call Dealer
              </Button>
              <Button className="flex-1" onClick={whatsappHandler}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TractorDetailsDialog;