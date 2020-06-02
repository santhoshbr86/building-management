import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { BuildingService } from './building.service';

describe('BuildingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[BuildingService]
  }));

  it('should be created', () => {
    const service: BuildingService = TestBed.get(BuildingService);
    expect(service).toBeTruthy();
  });
  it('should get data', () => {
     inject(
      [HttpTestingController, BuildingService],
      (httpMock: HttpTestingController, bs:BuildingService) => {
        const mockRoom = [
          {"id":"1", "temparature":20, "humidity":40 },
          {"id":"2","temparature":28, "humidity":50 }
        ];
        bs.getRoomDetails('1').subscribe((d) => {
                  expect(d).toEqual(mockRoom);
        });
         const mockReq = httpMock.expectOne('/assets/resources/room.json');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockRoom);

    httpMock.verify();
    });
});
});