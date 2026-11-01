<?php
// English names for the demo team's coach-owned GPS band labels, written the
// way the GPS settings screen writes them: the zone→column map and the bands
// together (saving bands alone drops the defaults' synthesised zone map and
// leaves every band unreadable). The app shows these labels verbatim on
// purpose: they belong to the coach.
// Run from P3rform: php artisan tinker --execute="require '<abs path>/localize-en.php';"
$team = App\Models\Team::find(1);
$resolver = app(App\Services\Gps\GpsBandResolver::class);
$names = ['aerobic' => 'Aerobic', 'hid' => 'High intensity', 'hsr' => 'High-speed running', 'sprint' => 'Sprint'];
$blueprint = $resolver->defaultBlueprint($team);
$resolver->saveZoneMap($team, $blueprint['zones']);
$resolver->saveBands($team, array_map(fn ($b) => ['key' => $b['key'], 'label' => $names[$b['key']] ?? $b['label'], 'zones' => $b['zones']], $blueprint['bands']));
// A fresh resolver: the one above cached the bands it read before saving.
echo json_encode((new App\Services\Gps\GpsBandResolver(app(App\Services\Gps\GpsMetricMapResolver::class)))->bands($team)).PHP_EOL;
