import type { ListeningSceneType } from '@/types/listening'
import { OfficeScene } from './OfficeScene'
import { StationScene } from './StationScene'
import { RestaurantScene } from './RestaurantScene'
import { HomeScene } from './HomeScene'
import { StoreScene } from './StoreScene'
import { ClassroomScene } from './ClassroomScene'

export { OfficeScene, StationScene, RestaurantScene, HomeScene, StoreScene, ClassroomScene }

export const SCENE_MAP: Record<ListeningSceneType, React.FC<Record<string, unknown>>> = {
  office: OfficeScene,
  station: StationScene,
  restaurant: RestaurantScene,
  home: HomeScene,
  store: StoreScene,
  classroom: ClassroomScene,
}
